import { NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(request: Request) {
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
    console.error("Missing Mailchimp environment variables")
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

  try {
    // Step 1: Add or update the subscriber with merge fields
    // Default Mailchimp merge fields: FNAME, LNAME, PHONE
    // COUNTRY and INSURANCE are custom — they'll need to be created in Mailchimp
    // (or will be silently ignored until created)
    const memberUrl = `${baseUrl}/members/${subscriberHash}`
    const memberRes = await fetch(memberUrl, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          PHONE: phone,
          COUNTRY: country,
          INSURANCE: insurance.toUpperCase(),
        },
      }),
    })

    const memberData = await memberRes.json()

    if (!memberRes.ok) {
      if (memberData.title === "Forgotten Email Not Subscribed") {
        return NextResponse.json(
          {
            error:
              "This email was previously unsubscribed. Please use a different email or contact me directly.",
          },
          { status: 400 }
        )
      }

      console.error("Mailchimp member error:", memberData)
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      )
    }

    const alreadySubscribed =
      memberData.status === "subscribed" && memberRes.status === 200

    // Step 2: Add tags — "waitlist" + insurance provider if applicable
    const tags: { name: string; status: string }[] = [
      { name: "waitlist", status: "active" },
    ]

    if (insurance !== "none") {
      tags.push({ name: `insurance:${insurance}`, status: "active" })
    }

    const tagUrl = `${baseUrl}/members/${subscriberHash}/tags`
    const tagRes = await fetch(tagUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({ tags }),
    })

    if (!tagRes.ok) {
      const tagData = await tagRes.json()
      console.error("Mailchimp tag error (subscriber still added):", tagData)
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
