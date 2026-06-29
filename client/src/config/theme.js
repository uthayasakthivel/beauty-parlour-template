// ============================================================
//  THEME CONFIG — Change colors, fonts, and brand here ONLY
//  All components automatically pick up these values.
// ============================================================

const theme = {
  // ── BRAND COLORS ──────────────────────────────────────────
  // Primary is the main action color (buttons, accents, links)
  // Change "teal" to any Tailwind color: rose, violet, amber, teal, sky …
  colors: {
    primary: "teal", // e.g. "rose" | "violet" | "amber" | "teal"
    primaryShade: "600", // Tailwind shade: 400 | 500 | 600 | 700 | 800
    primaryLight: "50", // Light bg shade for cards/sections: 50 | 100
    primaryMid: "100", // Mid shade for icon backgrounds
    primaryDark: "700", // Hover/dark variant shade

    // Hero & banner overlay darkness  (black/{value})
    overlayOpacity: "55", // 40 | 50 | 55 | 60 | 70

    // Navbar background (scrolled state)
    navBg: "white", // "white" | "gray-950" | "teal-950" etc.
    navText: "gray-700", // link color in nav

    // Footer background
    footerBg: "gray-950",
    footerText: "gray-300",

    // Section alternating backgrounds
    sectionLight: "white",
    sectionAccent: "#FFF5F8", // Very light tinted background
    sectionAlt: "teal-50",
  },

  // ── TYPOGRAPHY ────────────────────────────────────────────
  // heading font is loaded via Google Fonts in index.css
  // body font is also set there. Update BOTH places if you change fonts.
  fonts: {
    // Heading font class (defined in index.css as .heading-font)
    headingClass: "heading-font", // keep this; change the actual font in index.css

    // Google Fonts URL in index.css — update that file to swap fonts
    // Current: Cormorant Garamond (heading) + Poppins (body)
    // Suggestions:
    //   Elegant  → Playfair Display + Lato
    //   Modern   → DM Serif Display + DM Sans
    //   Feminine → Great Vibes + Quicksand
    //   Minimal  → Josefin Sans + Nunito
  },

  // ── BORDER RADIUS ─────────────────────────────────────────
  // Controls "roundness" of cards, buttons, images
  radius: {
    card: "rounded-3xl", // "rounded-xl" | "rounded-2xl" | "rounded-3xl" | "rounded-none"
    button: "rounded-full", // "rounded-lg" | "rounded-full" | "rounded-none"
    image: "rounded-[40px]", // image corners
    badge: "rounded-full",
  },

  // ── SPACING ───────────────────────────────────────────────
  // Section vertical padding
  spacing: {
    section: "py-28", // "py-20" | "py-24" | "py-28" | "py-32"
  },

  // ── CURRENCY ──────────────────────────────────────────────
  // Used in PricingCards
  currency: "₹", // "₹" | "$" | "€" | "£" | "AED"
};

export default theme;
