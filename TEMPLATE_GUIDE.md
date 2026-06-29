# 🎨 Beauty Parlour — MERN Stack Website Template

A fully customizable React + Node.js website template for beauty parlours, salons, spas,
and any service-based business. This guide walks you through how to make it yours in minutes.

---

## 📁 Project Structure

```
beauty-parlour-template/
├── client/                         ← React frontend (Vite + Tailwind)
│   ├── public/                     ← Static images (replace these!)
│   │   ├── gallery/                ← Gallery photos
│   │   ├── team/                   ← Team member photos
│   │   ├── testimonials/           ← Client photos
│   │   ├── instagram/              ← Instagram feed photos
│   │   ├── images/                 ← Hero banner, appointment BG
│   │   └── about/                  ← About page story image
│   └── src/
│       ├── config/
│       │   ├── site.js             ← ⭐ Business info (name, phone, email…)
│       │   ├── theme.js            ← ⭐ Colors, fonts, border radius
│       │   └── animations/
│       │       └── variants.js     ← Framer Motion animation presets
│       ├── data/                   ← ⭐ All editable content (services, pricing…)
│       ├── components/             ← UI components (edit sparingly)
│       ├── pages/                  ← Page-level components
│       └── index.css               ← ⭐ Font imports live here
├── server/                         ← Express backend
│   ├── .env.example                ← Copy to .env and fill in values
│   └── server.js
└── TEMPLATE_GUIDE.md               ← You are here
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install                         # root (runs both client + server)
cd client && npm install
cd ../server && npm install

# 2. Set up environment variables
cp server/.env.example server/.env  # fill in MongoDB URI etc.
cp client/.env.example client/.env  # fill in API URL

# 3. Start development servers
npm run dev                         # from root — starts both
# OR separately:
cd client && npm run dev            # frontend → http://localhost:5173
cd server && node server.js         # backend  → http://localhost:5000
```

---

## ✏️ Step 1 — Update Business Info

Open **`client/src/config/site.js`** and fill in all your details:

```js
const site = {
  brand: {
    first: "Your Brand", // Shown in primary color in navbar & footer
    second: " Name", // Shown in dark color
  },
  tagline: "Your Tagline Here",
  phone: "+91 00000 00000",
  whatsapp: "910000000000", // WhatsApp number without + or spaces
  email: "hello@yourbrand.com",
  address: "Your Full Address",
  workingHours: {
    weekdays: "9:00 AM - 8:00 PM",
    sunday: "10:00 AM - 5:00 PM",
  },
  social: {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourhandle",
    youtube: "https://youtube.com/yourchannel",
  },
  mapEmbedSrc: "https://www.google.com/maps?q=Your+City&output=embed",
};
```

> 💡 **Every component that shows contact info reads from this one file.**
> You only need to change it once and it updates everywhere.

---

## 🎨 Step 2 — Change Colors

Open **`client/src/config/theme.js`** to customize the color scheme.

### Change the Primary Color

```js
colors: {
  primary: "teal",        // ← Change this!
  primaryShade: "600",    // Leave as-is for most colors
  primaryLight: "50",
  primaryMid: "100",
  primaryDark: "700",
}
```

**Popular color options (Tailwind color names):**

| Color Name | Result                  |
| ---------- | ----------------------- |
| `teal`     | teal/feminine (default) |
| `rose`     | Deep rose/red           |
| `violet`   | Purple/luxurious        |
| `amber`    | Gold/warm               |
| `teal`     | Teal/spa/wellness       |
| `sky`      | Blue/cool               |
| `emerald`  | Green/natural           |

> ⚠️ **Important:** The theme.js file documents your intent, but Tailwind classes are
> hardcoded in components (e.g., `bg-teal-600`, `text-teal-600`).
> **To actually change the color**, do a find & replace in your editor:
>
> - Find: `teal` → Replace: `violet` (or your chosen color)
> - Scope: `client/src/` folder only

**VS Code shortcut:**

- Press `Ctrl+Shift+H` (Find & Replace across files)
- Search: `teal-` | Replace: `violet-`
- Include: `client/src/**`

---

## 🔤 Step 3 — Change Fonts

Fonts are set in **`client/src/index.css`**.

### Step 3a — Choose fonts

Go to [fonts.google.com](https://fonts.google.com) and pick:

1. A **heading font** (serif works great for beauty brands)
2. A **body font** (clean sans-serif)

Popular combinations:
| Heading Font | Body Font | Vibe |
|---|---|---|
| Cormorant Garamond | Poppins | Elegant (default) |
| Playfair Display | Lato | Classic luxury |
| DM Serif Display | DM Sans | Modern editorial |
| Great Vibes | Quicksand | Feminine/soft |
| Josefin Sans | Nunito | Minimal/clean |

### Step 3b — Update index.css

```css
/* Replace the @import line with your new fonts */
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Lato:wght@300;400;700&display=swap");

body {
  font-family: "Lato", sans-serif; /* ← Your body font */
}

.heading-font {
  font-family: "Playfair Display", serif; /* ← Your heading font */
}
```

---

## 📋 Step 4 — Edit Content (Data Files)

All text content lives in **`client/src/data/`**. Edit each file:

### Services (`data/services.js`)

```js
{
  id: 1,
  title: "Hair Styling",           // ← Service name
  description: "Short description", // ← 1 sentence description
  icon: FaCut,                      // ← Icon from react-icons/fa
}
```

Browse icons at: https://react-icons.github.io/react-icons/icons/fa/

### Pricing (`data/pricing.js`)

```js
{
  title: "Basic Package",
  price: 999,           // ← Number only (currency set in theme.js)
  popular: false,       // ← Set true for "MOST POPULAR" badge
  features: ["Feature 1", "Feature 2"],
}
```

### Team (`data/team.js`)

```js
{
  name: "Team Member Name",
  role: "Job Title",
  image: "/team/team1.jpg",   // ← Place your image in /public/team/
}
```

### Testimonials (`data/testimonials.js`)

```js
{
  name: "Client Name",
  role: "Bride / Regular Client",
  image: "/testimonials/client1.jpg",
  rating: 5,
  review: "What they said about you...",
}
```

### FAQs (`data/faqs.js`)

```js
{
  question: "Common question?",
  answer: "Your helpful answer.",
}
```

### Statistics (`data/statistics.js`)

```js
{
  value: 1000,   // ← Number to count up to
  suffix: "+",   // ← Shown after number
  label: "Happy Clients",
  icon: FaSmile,
}
```

### Gallery (`data/gallery.js`)

```js
{
  category: "Hair",        // ← Must match a category in GallerySection.jsx
  title: "Luxury Hair",
  image: "/gallery/hair1.jpg",
}
```

To add/rename gallery categories, also update `GallerySection.jsx`:

```js
const categories = ["All", "Hair", "Makeup", "Spa", "Nails"]; // ← edit this array
```

---

## 🖼️ Step 5 — Replace Images

Replace all placeholder images with your real photos.

### Image locations and recommended sizes:

| Folder                                | Purpose                        | Recommended Size     |
| ------------------------------------- | ------------------------------ | -------------------- |
| `public/gallery/`                     | Gallery section photos         | 800×600px            |
| `public/team/`                        | Team member portraits          | 600×800px (portrait) |
| `public/testimonials/`                | Client photos                  | 200×200px (square)   |
| `public/instagram/`                   | Instagram feed grid (6 photos) | 600×600px            |
| `public/images/hero.jpg`              | **Wait — see below**           | —                    |
| `public/images/about-banner.jpg`      | About page banner              | 1920×600px           |
| `public/images/appointment-bg.jpg`    | Appointment CTA background     | 1920×800px           |
| `public/about/story.jpg`              | About page story image         | 800×600px            |
| `src/assets/images/hero.jpg`          | Homepage hero (main)           | 1920×1080px          |
| `src/assets/images/why-choose-us.jpg` | Why choose us image            | 800×900px            |

> ⚠️ **Hero image is in `src/assets/`**, not `public/`. Don't confuse the two.

### Tips for best results:

- Use high-quality photos (1–3MB each is fine)
- Keep the same filename when replacing — no code changes needed
- For team photos: consistent aspect ratio looks best (all portrait or all square)

---

## 🗺️ Step 6 — Update Google Map

1. Go to [Google Maps](https://maps.google.com)
2. Search your business location
3. Click **Share** → **Embed a map** → Copy the `src="..."` URL
4. Paste it in `site.js`:

```js
mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18...",
```

---

## 🧩 Step 7 — Edit Page Text (Components)

Some text is directly in component files. Here's where to find key pieces:

| Text to change                 | File location                               |
| ------------------------------ | ------------------------------------------- |
| Hero headline & subtext        | `components/Hero/Hero.jsx`                  |
| "Why Choose Us" section titles | `components/About/WhyChooseUs.jsx`          |
| "Our Story" paragraph          | `components/About/StorySection.jsx`         |
| Mission & Vision cards         | `components/About/MissionVision.jsx`        |
| Appointment CTA text           | `components/Appointment/AppointmentCTA.jsx` |
| Instagram section headline     | `components/Common/InstagramSection.jsx`    |
| Footer description text        | `components/Layout/Footer.jsx`              |
| 404 page message               | `pages/NotFound/NotFound.jsx`               |

---

## 🌐 Step 8 — Environment Variables

**Server** — copy `server/.env.example` to `server/.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

**Client** — copy `client/.env.example` to `client/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🚢 Deployment

### Frontend (Vercel / Netlify)

```bash
cd client
npm run build   # Generates /dist folder
```

- Upload `dist/` to Netlify or connect repo to Vercel
- Set `VITE_API_URL` in your hosting environment variables

### Backend (Render / Railway / VPS)

- Deploy the `server/` folder
- Set all environment variables from `.env` in your hosting dashboard

---

## ♻️ Using This as a Template for Multiple Clients

To create a new project from this template:

1. **Copy the folder** and rename it: `cp -r beauty-parlour-template new-client-name`
2. Edit **`site.js`** — brand name, phone, address, social links
3. Replace **images** in `/public/` and `/src/assets/images/`
4. Edit **data files** in `/src/data/` — services, pricing, team, etc.
5. Optionally change **colors** (find & replace `teal-` in `src/`)
6. Optionally change **fonts** in `index.css`

**Checklist per new client:**

- [ ] `config/site.js` — all business info
- [ ] `data/services.js` — services list
- [ ] `data/pricing.js` — packages & prices
- [ ] `data/team.js` — team members
- [ ] `data/testimonials.js` — client reviews
- [ ] `data/faqs.js` — FAQs
- [ ] `data/statistics.js` — numbers
- [ ] `data/gallery.js` — gallery items + categories
- [ ] All images replaced
- [ ] Hero headline edited (`Hero.jsx`)
- [ ] Map embed URL updated (`site.js`)
- [ ] `.env` files set up for server & client
- [ ] Social links updated (`site.js`)

---

## 📦 Tech Stack

| Layer      | Tech                             |
| ---------- | -------------------------------- |
| Frontend   | React 19, Vite 8, Tailwind CSS 4 |
| Routing    | React Router DOM 7               |
| Animations | Framer Motion                    |
| Slider     | Swiper.js                        |
| Icons      | React Icons (Font Awesome)       |
| Forms      | React Hook Form                  |
| Toasts     | React Hot Toast                  |
| HTTP       | Axios                            |
| Backend    | Node.js, Express                 |
| Database   | MongoDB (Mongoose)               |

---

## 🆘 Common Issues

**Blank page after changing image:**
→ Make sure the filename matches exactly (case-sensitive on Linux/Mac)

**Font not changing:**
→ Update BOTH the `@import` URL and the `font-family` value in `index.css`

**Color not changing:**
→ Tailwind classes are hardcoded. Do a find & replace (`teal-` → `violet-`) in `client/src/`

**Map not showing:**
→ Make sure you copied the `src="..."` value from Google Maps embed, not the full iframe HTML

**MongoDB not connecting:**
→ Check your `MONGO_URI` in `server/.env` — make sure username/password are URL-encoded

---

_Template generated from a real MERN beauty parlour project._
