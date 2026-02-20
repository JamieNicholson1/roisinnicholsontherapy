# Cursor Instructions: Roisin Nicholson Therapy Website

## Project Overview

Recreate a simple, calming therapist website for a baby loss counsellor. The site should feel warm, safe, and professional while being easy to navigate. This is a low-complexity site with minimal integrations.

---

## Brand Identity

### Tone & Feel
- **Warm and compassionate** - the visitor is likely grieving or anxious
- **Professional yet personal** - accredited therapist with lived experience
- **Calming sanctuary** - soft, gentle, never clinical or cold
- **Safe space** - welcoming, non-judgmental, approachable

### Colour Palette (Extract from existing site or use these calming tones)
```css
:root {
  --primary-soft: #8B9E93;      /* Sage green - calming, natural */
  --primary-dark: #5C7066;      /* Deep sage - text/accents */
  --background: #FAF9F7;        /* Warm off-white - soft, not stark */
  --text-primary: #3D3D3D;      /* Soft charcoal - easy on eyes */
  --text-secondary: #6B6B6B;    /* Medium grey */
  --accent-warm: #D4B8A0;       /* Warm taupe - subtle highlights */
  --white: #FFFFFF;
  --border-light: #E8E5E0;      /* Subtle borders */
}
```

### Typography
- **Headings**: Elegant serif or modern humanist sans-serif (e.g., `Cormorant Garamond`, `Lora`, or `DM Sans`)
- **Body**: Readable, friendly sans-serif (e.g., `DM Sans`, `Nunito`, `Open Sans`)
- **Avoid**: Cold, clinical fonts. Keep it warm and approachable

---

## Tech Stack (Recommended)

```
Framework: Next.js 14 (App Router)
Styling: Tailwind CSS
Deployment: Vercel
Forms: Simple mailto: or Calendly embed
No database required
```

---

## Site Structure

```
/
├── Home (/)
├── About Roisin (/about)
├── Therapy (/therapy)
│   ├── Baby Loss Support
│   ├── Pregnancy After Loss
│   └── Parenting After Loss
├── Pricing (/pricing)
└── Grief Support Course (/grief-course)
```

---

## Page-by-Page Specifications

### 1. HOME PAGE (/)

**Hero Section**
- Large, calming hero image (existing photo of Roisin outdoors/nature)
- Headline: "Hi, I'm Roisin - Your Compassionate & Understanding Psychotherapist Who Gets it!"
- Subheadline: "I offer a space where none of your feelings are too much, too complicated or too difficult to hold."
- Italicised quote: *"It's possible to feel both grief and hope at once. I'm here to help you hold both."*
- Brief intro paragraph about online therapy for baby loss and pregnancy after loss
- Links to About page and Instagram (@roisinnicholson.therapy)

**Services Section**
Three cards linking to service pages:
1. **Baby Loss Support** - brief description + link
2. **Pregnancy After Loss** - brief description + link  
3. **Parenting After Loss** - brief description + link

**Footer**
- Crisis disclaimer: "This website does not provide crisis or emergency support. If you are in immediate danger, contact local emergency services or a crisis line in your area without delay."
- Privacy Policy link
- Terms & Conditions link
- Email: info@babylosstherapist.com
- Legal line: "All counselling services are provided under the laws of England and Wales."

---

### 2. ABOUT PAGE (/about)

**Layout**: Two-column with image on left/right alternating

**Content Sections:**

1. **Introduction**
   - Professional headshot of Roisin
   - Name pronunciation: Róisín (Row-sheen)
   - Credentials: Person-centred psychotherapist (MBACP Accred)
   - Specialisation: Baby loss and pregnancy after loss

2. **Personal Story**
   - First baby (son) was stillborn
   - Later experienced miscarriage
   - Two living children (rainbow babies)
   - Understands pregnancy anxiety, fear of appointments, bonding difficulties

3. **My Approach**
   - Person-centred therapy
   - Client leads the way
   - No "move on" or "everything happens for a reason"
   - Practical tools for grief and anxiety
   - Help with bonding during pregnancy after loss

4. **Credentials List**
   - 8 years therapeutic experience
   - Accredited member of BACP
   - MA in Person-Centred Experiential Counselling
   - Background in schools, youth groups, charity sector, sexual violence support
   - Foundation for Infant Loss certified

5. **Outside of Work**
   - Outdoors with kids
   - Gym and hiking
   - Reading
   - Travel planning

6. **Let's Connect**
   - Note about waitlist status
   - Instagram link for updates
   - CTA button: "FREE CONSULTATION" → Calendly link

7. **Before You Enquire (Important notice)**
   - Online only
   - Cannot work with USA/Canada clients (licensing)
   - Not crisis/emergency support
   - Not a substitute for medical/psychiatric care

**Images to include:**
- Professional headshot
- Outdoor/lifestyle photos (nature, hiking)
- Photos showing warmth and approachability

---

### 3. THERAPY PAGE (/therapy)

**Hero**
- Empathetic headline about understanding baby loss
- Personal introduction from Roisin

**Main Content**

1. **Understanding You**
   - Acknowledgment of stillbirth, miscarriage, rainbow babies
   - Understanding of pregnancy anxiety
   - Every scan, every appointment, every "is this your first?"

2. **How I Help** (list format)
   - Process previous grief and loss
   - Develop practical tools for anxiety/trauma
   - Learn to advocate at medical appointments
   - Connect with current pregnancy while honouring loss
   - Build self-compassion

3. **FAQ-style sections:**
   - "You might be wondering if therapy can really help"
   - "I'm worried talking will make it worse"
   - "How do I know if I'm ready?"
   - "What if we're not the right fit?"

4. **About Online Therapy**
   - Comfort of your own safe space
   - Medical settings can be triggering
   - Finding a quiet spot
   - "If the dog barks or life happens, that's okay too"

5. **CTA**
   - Free 15-minute consultation
   - Calendly button

---

### 4. PRICING PAGE (/pricing)

**Simple, transparent layout**

Display pricing tiers clearly:
- Session duration
- Frequency options
- Any package deals
- Payment methods accepted

Include:
- What's included in each session
- Cancellation policy
- Free consultation offer

---

### 5. GRIEF SUPPORT COURSE (/grief-course)

**Course overview page**

Sections:
- What the course covers
- Who it's for
- Format (self-paced, live, etc.)
- What you'll learn
- Testimonials if available
- Pricing/enrollment CTA

---

## Component Specifications

### Navigation
```
Desktop: Horizontal nav with logo left, links right
Mobile: Hamburger menu, slide-out drawer

Links:
- Roisin Nicholson Therapy (logo/home)
- About Roisin
- Therapy
- Pricing
- Grief Support Course
```

### Buttons
```css
/* Primary CTA - warm and inviting */
.btn-primary {
  background: var(--primary-soft);
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--primary-dark);
}

/* Secondary/outline */
.btn-secondary {
  border: 1px solid var(--primary-soft);
  color: var(--primary-soft);
  background: transparent;
}
```

### Image Treatment
- Soft, slightly rounded corners (4-8px)
- Subtle shadow for depth
- Maintain warmth in colour grading
- Aspect ratios: Hero 16:9, Portraits 3:4 or 1:1

### Typography Scale
```css
/* Headings */
h1 { font-size: 2.5rem; line-height: 1.2; }
h2 { font-size: 2rem; line-height: 1.25; }
h3 { font-size: 1.5rem; line-height: 1.3; }

/* Body */
body { font-size: 1rem; line-height: 1.7; }
.large-text { font-size: 1.125rem; }
.small-text { font-size: 0.875rem; }
```

---

## External Integrations

### Calendly
- Embed for free consultation booking
- Link: https://calendly.com/roisinnicholson-therapy/free-15-min-call
- Style to match site colours where possible

### Instagram
- Link to: @roisinnicholson.therapy
- Consider embedding recent posts on homepage (optional)

### Email
- Contact: info@babylosstherapist.com
- Simple mailto: link is sufficient

### Documents
- Privacy Policy (PDF or page)
- Terms & Conditions (PDF or page)

---

## Images to Reuse

Download these from the existing site:
1. `DSC_0896.jpg` - Main professional photo
2. `DSC_0546.jpg` - Secondary portrait
3. `1+(1+of+1)-19.jpg` - Hero/lifestyle image
4. `IMG_4713.jpg` - Outdoor photo
5. `9AC1548D-3DA8-44CE-9B51-79CAD9789EB2.JPG` - Nature/personal photo
6. `20180825_193522.jpg` - Additional lifestyle image

Store in: `/public/images/`

---

## Design Principles

### DO:
- ✅ Use generous whitespace - let content breathe
- ✅ Keep layouts simple and uncluttered
- ✅ Use soft shadows and subtle borders
- ✅ Make CTAs clear but not aggressive
- ✅ Ensure excellent mobile experience
- ✅ Use real photos, not stock images
- ✅ Write in first person, warm tone
- ✅ Include emojis sparingly (🫶 is used on original)

### DON'T:
- ❌ Use harsh colours or stark contrasts
- ❌ Overcrowd pages with content
- ❌ Use clinical or cold imagery
- ❌ Hide important information
- ❌ Make the site feel like a corporate healthcare company
- ❌ Use generic stock photos of sad people

---

## Accessibility Requirements

- Colour contrast ratio minimum 4.5:1
- Alt text on all images
- Keyboard navigation support
- Focus states visible
- Semantic HTML structure
- Skip to main content link
- Responsive font sizes (rem units)

---

## SEO Considerations

```
Title format: [Page Name] | Roisin Nicholson Therapy
Meta description: Include keywords naturally

Key terms to include:
- Baby loss therapist
- Miscarriage counselling
- Pregnancy after loss
- Stillbirth support
- Online therapy UK
- BACP accredited counsellor
- Person-centred therapy
```

---

## Folder Structure

```
/app
  /page.tsx (home)
  /about/page.tsx
  /therapy/page.tsx
  /pricing/page.tsx
  /grief-course/page.tsx
  /layout.tsx
  /globals.css

/components
  /Header.tsx
  /Footer.tsx
  /Button.tsx
  /ServiceCard.tsx
  /HeroSection.tsx
  /CTASection.tsx

/public
  /images
    (all photos)
  /docs
    /privacy-policy.pdf
    /terms-conditions.pdf

/lib
  /constants.ts (site metadata, navigation links)
```

---

## Implementation Order

1. **Setup**: Next.js project with Tailwind
2. **Global styles**: Colours, typography, base components
3. **Layout**: Header, Footer, navigation
4. **Home page**: Hero, services, footer
5. **About page**: Full content with images
6. **Therapy page**: Service details
7. **Pricing page**: Pricing structure
8. **Grief course page**: Course information
9. **Mobile responsiveness**: Test all breakpoints
10. **Final polish**: Transitions, hover states, accessibility audit

---

## Notes

- The existing site is built on Squarespace, so the design language should feel similar but can be modernised
- Keep the emotional sensitivity in mind throughout - visitors are likely in vulnerable states
- The site should feel like a warm welcome, not a sales pitch
- Roisin's personality should come through - approachable, understanding, professional

---

## Quick Start Commands

```bash
# Create project
npx create-next-app@latest babyloss-therapist --typescript --tailwind --app

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

*Document created for Cursor AI-assisted development. Reference this throughout the build process.*
