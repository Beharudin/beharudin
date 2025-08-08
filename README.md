
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
