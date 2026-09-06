import { NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, country, insurance } =
      await request.json()

    if (!firstName || !lastName || !email || !phone || !country || !insurance) {
      return NextResponse.json(
        { error: "Please fill in all fields." },
        { status: 400 }
      )
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY
    const LIST_ID = process.env.MAILCHIMP_LIST_ID
    const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX

    if (!API_KEY || !LIST_ID || !SERVER_PREFIX) {
      console.error("Missing Mailchimp environment variables:", {
        hasApiKey: !!API_KEY,
        hasListId: !!LIST_ID,
        hasServerPrefix: !!SERVER_PREFIX,
      })
      return NextResponse.json(
        { error: "Waitlist is temporarily unavailable. Please try again later." },
        { status: 500 }
      )
    }

    const baseUrl = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}`
    const headers = {
      Authorization: `apikey ${API_KEY}`,
      "Content-Type": "application/json",
    }

    const subscriberHash = crypto
      .createHash("md5")
      .update(email.toLowerCase())
      .digest("hex")

    // Step 1: Add or update the subscriber
    // Only use default Mailchimp merge fields (FNAME, LNAME, PHONE)
    // COUNTRY and INSURANCE are sent as tags instead to avoid merge field errors
    const memberUrl = `${baseUrl}/members/${subscriberHash}`
    const memberBody = {
      email_address: email,
      status_if_new: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        PHONE: phone,
      },
    }

    console.log("Mailchimp request to:", memberUrl)

    const memberRes = await fetch(memberUrl, {
      method: "PUT",
      headers,
      body: JSON.stringify(memberBody),
    })

    const memberData = await memberRes.json()

    if (!memberRes.ok) {
      console.error("Mailchimp member error:", {
        status: memberRes.status,
        title: memberData.title,
        detail: memberData.detail,
        errors: memberData.errors,
      })

      if (memberData.title === "Forgotten Email Not Subscribed") {
        return NextResponse.json(
          {
            error:
              "This email was previously unsubscribed. Please use a different email or contact me directly.",
          },
          { status: 400 }
        )
      }

      if (memberData.title === "Member Exists") {
        // They're already subscribed — treat as success
        return NextResponse.json({
          success: true,
          alreadySubscribed: true,
        })
      }

      // If merge fields caused the error, retry without them
      if (memberData.detail?.includes("merge") || memberData.errors?.length) {
        console.log("Retrying without merge fields...")
        const retryRes = await fetch(memberUrl, {
          method: "PUT",
          headers,
          body: JSON.stringify({
            email_address: email,
            status_if_new: "subscribed",
            merge_fields: {
              FNAME: firstName,
              LNAME: lastName,
            },
          }),
        })

        const retryData = await retryRes.json()

        if (!retryRes.ok) {
          console.error("Mailchimp retry error:", retryData)
          return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
          )
        }
      } else {
        return NextResponse.json(
          { error: "Something went wrong. Please try again." },
          { status: 500 }
        )
      }
    }

    const alreadySubscribed =
      memberData.status === "subscribed" && memberRes.status === 200

    // Step 2: Add tags — source site + "waitlist" + country + insurance provider
    // "source:uk-site" distinguishes UK-site signups from AU-site signups in the shared audience
    const tags: { name: string; status: string }[] = [
      { name: "source:uk-site", status: "active" },
      { name: "waitlist", status: "active" },
      { name: `country:${country}`, status: "active" },
    ]

    if (insurance !== "none") {
      tags.push({ name: `insurance:${insurance}`, status: "active" })
    } else {
      tags.push({ name: "self-funding", status: "active" })
    }

    try {
      const tagUrl = `${baseUrl}/members/${subscriberHash}/tags`
      const tagRes = await fetch(tagUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({ tags }),
      })

      if (!tagRes.ok) {
        const tagData = await tagRes.json()
        console.error("Mailchimp tag error (subscriber still added):", tagData)
        // Don't fail the whole request — subscriber was already added
      }
    } catch (tagError) {
      console.error("Tag request failed (subscriber still added):", tagError)
      // Don't fail the whole request — subscriber was already added
    }

    return NextResponse.json({
      success: true,
      alreadySubscribed,
    })
  } catch (error) {
    console.error("Waitlist API error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
