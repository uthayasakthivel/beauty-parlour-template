// ============================================================
//  SITE CONFIG — All business info lives here.
//  Update this file to rebrand the entire website.
// ============================================================

const site = {
  // ── BRAND NAME ────────────────────────────────────────────
  // Displayed in Navbar and Footer as: [first][second]
  // Example: "Beauty" + "Studio" → "BeautyStudio"
  brand: {
    first: "Rimra", // ← Change this  (shown in primary color)
    second: " Parlour", // ← Change this  (shown in default color)
  },

  // ── META ──────────────────────────────────────────────────
  tagline: "Luxury Beauty & Wellness",
  description:
    "Professional beauty parlour offering premium hair styling, bridal makeup, skincare, spa and wellness services.",

  // ── CONTACT ───────────────────────────────────────────────
  phone: "+91 00000 00000", // ← Your phone number
  whatsapp: "910000000000", // ← WhatsApp number (no + or spaces)
  email: "hello@yourbrand.com", // ← Your email
  address: "Your Address, City, State", // ← Your address

  // ── WORKING HOURS ─────────────────────────────────────────
  workingHours: {
    weekdays: "9:00 AM - 8:00 PM",
    sunday: "10:00 AM - 5:00 PM",
  },

  // ── SOCIAL LINKS ──────────────────────────────────────────
  social: {
    facebook: "#", // ← Replace "#" with your Facebook URL
    instagram: "#", // ← Replace "#" with your Instagram URL
    youtube: "#", // ← Replace "#" with your YouTube URL
  },

  // ── MAP ───────────────────────────────────────────────────
  // Used in GoogleMap component — paste your Google Maps embed src URL here
  mapEmbedSrc: "https://www.google.com/maps?q=Your+Location&output=embed",

  // ── GOOGLE ANALYTICS (optional) ───────────────────────────
  // Add your GA4 measurement ID if needed, else leave empty
  gaId: "",
};

export default site;
