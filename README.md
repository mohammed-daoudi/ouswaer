# 🧢 Ouswear — Modern Youth Caps E-commerce Website

Welcome to **Ouswear** — a bold, moody, and modern e‑commerce store for youth‑focused caps. This README contains the complete project description, brand story, technical architecture, UI/UX guidelines (including the opium‑aura black + red gradient aesthetic), 3D product showcase approach, developer setup, testing, deployment, and roadmap — everything you need to build, run, and extend the project.

---

## 🚀 Project Summary

**Ouswear** is a full‑stack web app built with **Next.js (TypeScript)** and **MongoDB**, designed to showcase and sell stylish caps with a premium, mysterious aesthetic. The site is mobile‑first and uses advanced 3D visuals (React Three Fiber) to create dramatic, interactive product experiences.

Key differentiators:

* Dark‑black + red gradient "opium aura" theme for a moody, nonchalant vibe.
* Intense 3D product presentations (GLTF/GLB models) with physics‑like animations.
* Seamless e-commerce experience: product catalog → checkout → order fulfillment → tracking.

---

## 🎨 Brand & Design

**Brand voice:** Confident, casual, youth‑centric. Short, punchy copy.

**Tagline:** *Top off your look. Own your vibe.*

**Aesthetic brief:**

* Colour system: deep black base with layered red gradients and glowing accents.
* Visual mood: mystery, aura, nonchalance — think smoky, backlit products with subtle glow.
* Motion: 3D caps that float, spin, pulse, and react — heavy on immersive transitions.

**Tailwind color palette (suggested):**

```js
black: '#0a0a0a'
darkRed: '#1b0000'
crimson: '#8b0000'
auraRed: '#ff2b4a'
accent: 'rgba(255,44,74,0.12)'
```

**Typography:** modern, heavy sans‑serif for headings and rounded sans for body. Large display headings with tight letter spacing.

---

## 🧩 Tech Stack

* **Next.js 14 (App Router)** + **TypeScript**
* **React** + **React Hooks**
* **TailwindCSS** (custom theme + gradients)
* **Framer Motion** for UI transitions
* **React Three Fiber + Drei + Three.js** for 3D product scenes
* **MongoDB Atlas** + **Mongoose** for data
* **NextAuth.js** for authentication (JWT/session)
* **Netlify** deployment (recommended)

---

## 📦 Features Overview

### Customer features

* 3D‑rich homepage with hero and featured caps.
* Shop grid with filter/sort and live preview of 3D thumbnails.
* Product detail page with interactive 3D model viewer (rotation, zoom, aura hover effects).
* Cart, checkout, order confirmation, and order tracking.
* User profiles with order history and saved addresses.

### Admin features

* Admin dashboard to manage products, inventory, and orders.
* Order management (view, update status, export CSV).
* Manual order creation to handle phone/email orders.
* Product management with 3D model uploads and variants.

### E-commerce & Fulfillment

* Complete inventory management system.
* Automated order processing and status updates.
* Integrated shipping and tracking system.
* Real-time stock management and notifications.

---

## 🗂 Data Models (high level)

### User

* `_id`, `name`, `email`, `passwordHash` (if applicable), `role` (`customer`|`admin`), `addresses[]`, `createdAt`.

### Product

* `_id`, `title`, `slug`, `description`, `price`, `currency`, `images[]`, `models[]` (GLB urls), `variants[]`, `stock`, `tags[]`, `createdAt`.

### Order

* `_id`, `userId`, `items[]` (productId, variant, qty, price), `total`, `status` (pending|confirmed|shipped|delivered|canceled), `shippingAddress`, `tracking`, `createdAt`.

---

## 🔧 UI/UX: 3D & Motion Guidelines

**3D Implementation:**

* Use React Three Fiber for scene integration inside React components.
* Store GLB/GLTF cap models in `/public/models` and load via `useGLTF`.
* Use environment lighting, rim lights with subtle red tints, and soft shadows.

**Signature effects:**

* *Spin Burst:* quick rotational burst when user opens the product modal.
* *Hover Aura:* red glow outline that grows/shrinks on hover with a bloom post‑processing pass.
* *Warp Transitions:* page transitions perform a short camera dolly or perspective warp.
* *Physics Motion:* lightweight inertia (damping) for natural floating/tilt.

**Performance:**

* LOD (level of detail) models for thumbnails.
* Lazy load heavy 3D assets and show 2D placeholders for low bandwidth.
* Use `r3f` Suspense and skeleton loaders.

---

## 🧩 API Endpoints (suggested)

* `GET /api/products` — list & filter products
* `GET /api/products/[slug]` — product details
* `POST /api/auth/signup` — register
* `POST /api/auth/login` — login
* `POST /api/orders` — create order
* `GET /api/user/orders` — user orders (auth)
* `PUT /api/orders/[id]` — update order status
* `GET /api/admin/orders` — admin (protected)
* `POST /api/admin/products` — create/update products (admin)

Secure admin endpoints with role checks and server‑side session validation.

---

## 📁 Project Structure (recommended)

```
Ouswear/
├─ public/
│  ├─ images/
│  └─ models/          # .glb/.gltf 3D cap models
├─ src/
│  ├─ app/             # Next.js app router
│  │  ├─ (home)/page.tsx
│  │  ├─ shop/         # shop pages
│  │  └─ product/[slug]/page.tsx
│  ├─ components/      # ProductCard, Navbar, Footer, 3DViewer
│  ├─ models/          # Mongoose schemas
│  ├─ lib/             # db, auth helpers
│  ├─ pages/api/       # API routes (if using pages api)
│  ├─ styles/          # tailwind config + globals
│  └─ hooks/           # custom hooks (useCart, use3D)
├─ scripts/            # data importers, inventory management
├─ .env.local
├─ package.json
└─ README.md
```

---

## 🔌 Environment Variables (example)

```env
MONGODB_URI=mongodb+srv://oussama:fQFXIYNdL45AR4Y3@ouswear.ou4kj1v.mongodb.net/
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=strongsecret
JWT_SECRET=superjwtsecret
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

---

## 🛠 Local Setup & Dev Workflow

1. Clone the repo: `git clone <repo>`
2. Install: `npm install` or `yarn`
3. Create `.env.local` from `.env.example` and fill secrets.
4. Start dev server: `npm run dev` (Next.js)
5. Seed products (script provided): `npm run seed:products`

**Dev scripts** in `package.json`:

* `dev`, `build`, `start`, `lint`, `test`, `seed:products`, `update:inventory`.

---

## 🧪 Testing & QA

* Unit tests: Jest + React Testing Library for components.
* API tests: supertest for endpoints.
* Visual regression: storybook + Chromatic (optional).
* 3D smoke tests: render scenes in headless mode to ensure model load success.

---

## 📦 Deployment

**Netlify:**

1. Connect your GitHub repository to Netlify.
2. Add environment variables under **Site settings → Environment variables**.
3. Set the build command: `npm run build` and publish directory: `.next`.
4. Enable Next.js Runtime for SSR support (via Netlify plugin).

**Alternative:** Docker image with Node server and environment variables; deploy to Render / DigitalOcean / AWS.

**Notes:** Enable image optimization and CDN for large GLB/texture files.

---

## 🔐 Security & Best Practices

* Do not commit `.env` or secrets.
* Hash passwords (bcrypt) if using own auth.
* Use HTTPS in production and secure cookies.
* Secure payment processing with Stripe webhooks.
* Rate limit public endpoints.

---

## 📈 Roadmap & Future Enhancements

1. Payment integration (Stripe + PayPal) with local currency support.
2. AI product recommendations and personalized landing pages.
3. Multi‑language / localized content.
4. PWA support and offline caching for glimpses.
5. A/B testing and analytics dashboard.
6. Native mobile companion (React Native / Expo) using the same API.

---

## 🤝 Contribution & Code Standards

* Use feature branches and PRs. Keep commits atomic.
* Follow ESLint + Prettier formatting rules.
* Write tests for new features.
* Document major architectural decisions in `docs/`.

---

## 👤 Contact

Creator: Mohammed DAOUDI

* Email: [hello@ouswear.example](mailto:hello@ouswear.example) (replace before production)


---
