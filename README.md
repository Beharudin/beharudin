<h1 align="center">Hi 👋, I'm Beharudin Mohammed</h1>

<h3 align="center">
🚀 Expert Full Stack Developer | React | Next.js | Spring Boot | Node.js
</h3>

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,nextjs,nodejs,spring,tailwind,ts,js,mongodb,postgres,express,prisma,github,vscode,figma&perline=8" />
</p>

---

## 💡 About Me

🙋 I'm a highly skilled **React.js/Next.js developer**, proficient in **Front-End and Full-Stack development**. My expertise spans across the **MERN stack**, enabling me to craft top-notch websites. I specialize in leveraging **React.js**, **Next.js**, **Node.js**, **Spring Boot**, **MongoDB**, **Express.js**, **PostgreSQL**, **ClerkAuth**, **NextAuth**, **Supabase**, **Prisma**, **Drizzle**, and **SurveyJS** to meet the dynamic needs of modern businesses. I thrive on building **high-quality**, **user-centric** applications that elevate user experiences and drive success. I work with UI libraries like **Material UI**, **ShadCn-UI**, **Tailwind CSS**, and **Ant Design**, ensuring not just a website but a **stunningly attractive**, **lightning-fast**, and **secure digital masterpiece**.

---

🚀 **Get ready for a transformative experience!**

✨ Here's what you'll receive:
- ✔️ Fortified, robust websites ensuring total security  
- ✔️ Lightning-fast loading speeds for boosted conversion rates  
- ✔️ Seamlessly responsive, mobile-friendly products for all devices  
- ✔️ A 100% Guarantee of absolute satisfaction

---

## 🛠️ Tech Stack

### 💻 Front-End
- **React.js**, **Next.js**, **TypeScript**, **JavaScript**
- **Redux**, **Redux Toolkit**, **Zustand**
- **Tailwind CSS**, **Material UI**, **Ant Design**, **ShadCn-UI**
- **Formik**, **React Hook Form**
- **Framer Motion** – beautiful transitions & animations
- **SurveyJS** – custom form/survey flows

### 🚀 Back-End
- **Node.js**, **Express.js**, **Spring Boot**
- **PostgreSQL**, **MongoDB**
- **Prisma**, **Drizzle ORM**
- **Supabase** – full-featured Firebase alternative
- **Clerk Auth**, **NextAuth** – modern authentication

### 🧰 Tools & Workflows
- **Git, GitHub, GitLab**
- **Postman**, **Insomnia**
- **Figma to Code**: Figma → React/Next.js → Production
- **RESTful APIs**, **Axios**
- **Stripe Payments Integration**
  
---

## 🔥 Featured Skills

| Area             | Skills |
|------------------|--------|
| 🎯 Frontend      | React, Next.js, TypeScript, Tailwind, MUI, ShadCN |
| 🔧 Backend       | Node.js, Spring Boot, Express, Supabase |
| 📊 Database      | PostgreSQL, MongoDB, Prisma, Drizzle |
| 🔐 Auth          | Clerk, NextAuth, JWT |
| 🛒 Payments      | Stripe, Razorpay |
| ⚙️ Dev Tools     | Git, GitHub, Postman, Figma, Vercel, Docker |

---

## 📂 GitHub Stats

<!-- 💻 GitHub Stats and Activity -->
<div align="center">
  <!-- Total Commits, PRs, etc. (includes private and all commits) -->
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=beharudin&show_icons=true&theme=radical&include_all_commits=true&count_private=true" alt="Beharudin's GitHub stats" />

  <!-- Top languages used in public repos -->
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=beharudin&layout=compact&langs_count=8&theme=radical" alt="Top Languages" />
</div>

<!-- 📊 Contribution Graph -->
<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=beharudin&theme=github-compact&area=true" alt="GitHub Contribution Graph" />
</div>

---

## 📫 Let's Connect

I’m always open to **collaborations**, **freelance opportunities**, and **interesting projects**.

📧 Email: `beharudinmm@gmail.com`  
🌐 Portfolio: [beharudin-portfolio.onrender.com](https://beharudin-portfolio.onrender.com/)  
💼 LinkedIn: [linkedin.com/in/beharudin-mohammed-66411921a](https://www.linkedin.com/in/beharudin-mohammed-66411921a)  
🧑‍💻 Upwork: [upwork.com/freelancers/~01ea990ce4b4995fd3](https://www.upwork.com/freelancers/~01ea990ce4b4995fd3?mp_source=share)

---

## 📌 Keywords & Tags
React, Next.js, Redux, Tailwind, Spring Boot, Prisma, Supabase, Stripe, Drizzle ORM, MongoDB, PostgreSQL, JWT, ClerkAuth, Figma to Code, REST APIs, Full Stack, Developer Portfolio, Frontend Expert, Backend NodeJS Spring

---

# Coop Platform — Dashboards & Layouts (Admin, Shemach, Agent)

This repository contains a Next.js + Tailwind scaffold for a cooperative commerce platform with three portals: Admin, Shemach (Primary Cooperative) and Agent. Shipment tracking is explicitly excluded.

- Scope
  - No shipment tracking
  - Shemach: track store inventory, price lists, POS sales (Assigned Users and Other Users), balances
  - Agents: buy from factories, take loans, sell to anyone (not itemized), must receive payments via bank gateway; bank auto-deducts loans; commissions apply

- Domain model (condensed)
  - Users, Roles, Institutions, Factories, Products
  - Orders (Shemach/Agents → Factories), GoodsReceipt (no shipments)
  - Shemach: Store, Product, Price List, Inventory, Stock Ledger, Sale (+items), Assigned Users
  - Agent: ShadowAccount, Loan, PaymentGatewayTransaction, LoanRepaymentTransaction
  - Finance: Commission, Verification, Notification, AuditLog

- Data flows
  - Factory sale: Order → GoodsReceipt at ShemachStore or Agent
  - Shemach retail sale: ShemachSale → StockLedger ↓ → if bank payment → PaymentGatewayTransaction → Commission (P2)
  - Agent retail sale: Not itemized; buyer pays via bank → PaymentGatewayTransaction → auto LoanRepaymentTransaction → residual to Agent → Commission (P1)

- Front-end stack
  - Next.js (App Router) + React + TypeScript
  - Tailwind CSS + shadcn-style tokens, `lucide-react`
  - TanStack Query, TanStack Table, React Hook Form + Zod, `sonner`, date-fns

- Layouts and IA
  - 12-col responsive grid with right context rail
  - Shared shell for dashboards (`src/app/(dashboards)/layout.tsx`)
  - Routes: `/admin`, `/shemach`, `/agent` plus key sub-pages

- Admin dashboard
  - Menus: Stakeholders (Factories, Agents, Institutions, Shemachs, Consumers), Commerce (Products, Orders, Shemach Stores), Finance (Shadow Accounts, Loans & Credit, Commissions, Transactions), Risk & Compliance, Onboarding & Verification, Communications, Analytics, Settings
  - Pages scaffolded: Overview, Agents list, Shemach Stores list, Finance/Shadow Accounts
  - Agent detail focuses on Orders, Payments (gateway inflows), Loans, Transactions, Documents; no downstream sales tracking

- Shemach dashboard
  - Menus: Overview, POS & Sales, Inventory, Price Lists, Assigned Users, Receipts, Financials, Reports
  - Pages scaffolded: Overview, POS, Inventory

- Agent dashboard
  - Menus: Overview, Products, Orders, Shadow Account, Loans, Payments, Reports, Support
  - Pages scaffolded: Overview, Payments

- Creative multi-column patterns
  - Overview: mosaic KPI cards (col-span 2/3), primary chart (col-span 6/8), right rail (col-span 3)
  - List: sticky filters, table (col-span 8), side preview (col-span 4)
  - Detail: 3-column (3/6/3) with center tabs; right rail for actions/related

- Components
  - Reusable shell, minimal Button, placeholder tables and charts areas for TanStack Table and Recharts

- Project layout
  - `app/src/app` — App Router pages and layouts
  - `app/src/components` — shared UI components
  - `app/globals.css` — Tailwind base + CSS variables
  - `app/tailwind.config.ts` — Tailwind config
  - `app/package.json` — dependencies and scripts

- Run locally
  - cd `app`
  - Install: `npm i`
  - Dev: `npm run dev`
  - Build: `npm run build`; Start: `npm start`

- Notes
  - `.gitignore` excludes `node_modules/` and `.next/` — only source files are committed
  - Branch pushed: `feature/dashboards-clean` (PR link available in GitHub)

---
