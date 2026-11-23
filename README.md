# CampusCafe 🍽️

A school food pre-order system: students order from the mobile app,
and cafe staff manage menus and orders from a web admin panel.

[📱 Download APK](PASTE-DIRECT-DRIVE-LINK) · [🖥️ Admin Demo](PASTE-VERCEL-URL)

## Screenshots
| Menu | Item details | Order slots | Admin panel |
|------|-------------|-------------|-------------|
| ![](screenshots/menu.png) | ![](screenshots/details.png) | ![](screenshots/slots.png) | ![](screenshots/admin.png) |

## Features
- Phone number login with Firebase OTP
- Menu browsing by category (breakfast, lunch, snacks, beverages), search, Today's Special
- Two pre-order slots (Morning 9–10 AM, Evening 12–1 PM), QR payment, counter pickup
- Admin panel: full menu editing, live order management
- Nightly automation: tomorrow's menu is auto-created at 12:01 AM using Supabase `pg_cron`

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Mobile | React Native (Expo), Android |
| Admin | Next.js, Tailwind CSS (hosted on Vercel) |
| Database | Supabase (PostgreSQL) |
| Auth | Firebase Phone Authentication |
| Build | EAS Build |

## Architecture
[Mobile app] ⇄ [Supabase DB] ⇄ [Admin panel]
      ↑
[Firebase OTP Auth]

## Project Structure
- `CampusCafe/` – React Native mobile app
- `campus-cafe-admin/` – Next.js admin panel

## Run Locally
1. Clone the repo: `git clone https://github.com/Monarch0602/campus-cafe-app.git`
2. Copy `.env.example` to `.env` in each folder and add your own keys
3. Mobile: `cd CampusCafe && npm install && npx expo start`
4. Admin: `cd campus-cafe-admin && npm install && npm run dev`

## What I Learned
- Parallel queries and optimistic UI updates for a faster admin panel
- Scheduling database jobs with `pg_cron`
- Shipping an Android build with EAS

## Author
Pushkar · [LinkedIn](#) · [GitHub](https://github.com/Monarch0602)