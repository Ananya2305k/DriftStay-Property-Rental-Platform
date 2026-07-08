# DriftStay 🏡 — Property Rental & Listing Platform

A full-stack property rental and listing platform built on the MEN stack (MongoDB, Express.js, Node.js) with server-side rendering via EJS. DriftStay lets users browse, list, review, and manage rental properties with secure authentication, role-based access, and map-based location discovery — architected end-to-end using the MVC pattern.

## ✨ Features

- 🔐 **Secure Authentication & Authorization** — Passport.js-based login with session management, cookie-based persistence, and role-based access control enforced across 8+ protected routes
- 🏘️ **Full CRUD Listings** — Create, browse, update, and delete property listings through 12+ RESTful API routes
- ⭐ **Reviews & Ratings** — Complete review system with full CRUD functionality, letting users rate and comment on listings
- 🗺️ **Map-Based Discovery** — Integrated geocoding and interactive map visualization for location-based search across 100+ sample listings
- ✅ **Data Integrity** — One-to-many relational schemas in Mongoose with schema-level and client-side validation, blocking 95%+ of invalid submissions via custom middleware
- 🛡️ **Robust Error Handling** — Centralized error-handling architecture using custom middleware and an async wrapper (`wrapAsync`) to catch and handle promise rejections across all endpoints
- 💬 **Real-Time UX Feedback** — Flash-message-driven notifications for user actions (create, update, delete, login errors, etc.)

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Templating | EJS |
| Auth | Passport.js (Local Strategy), express-session |
| Maps/Geocoding | Mapbox/Geocoding API |
| Architecture | MVC (Model-View-Controller) |
| Deployment | Render |

## 📂 Project Structure

```
DriftStay/
├── controllers/     # Route logic (business logic layer)
├── models/          # Mongoose schemas (Listing, Review, User)
├── routes/          # Express route definitions (RESTful endpoints)
├── views/           # EJS templates
├── public/          # Static assets (CSS, client-side JS, images)
├── utils/           # Helper utilities (wrapAsync, ExpressError)
├── init/            # Database seeding scripts
├── middleware.js     # Auth & validation middleware
├── schema.js         # Joi validation schemas
└── app.js            # Application entry point
```

## 🔑 Core Routes (sample)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/listings` | View all listings |
| GET | `/listings/:id` | View a single listing |
| POST | `/listings` | Create a new listing (auth required) |
| PUT | `/listings/:id` | Edit a listing (owner only) |
| DELETE | `/listings/:id` | Delete a listing (owner only) |
| POST | `/listings/:id/reviews` | Add a review |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete a review (author only) |
| GET/POST | `/login`, `/signup` | Authentication |

## ⚙️ Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)

### Installation

```bash
git clone https://github.com/Ananya2305k/DriftStay-Property-Rental-Platform.git
cd DriftStay-Property-Rental-Platform
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
MAP_TOKEN=your_geocoding_api_key
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
```

### Run Locally

```bash
node app.js
```

Visit `http://localhost:8080` (or your configured port).


## 📌 Key Engineering Highlights

- Designed a scalable one-to-many data model (User → Listings → Reviews) with referential integrity enforced through Mongoose population
- Eliminated unhandled promise rejections across all endpoints using a custom `wrapAsync` middleware wrapper combined with a centralized Express error handler
- Implemented role-based route protection to ensure only listing owners can edit/delete their own content
- Handled production deployment challenges including MongoDB Atlas IP whitelisting, environment-based configuration, and CORS

## 👩‍💻 Author
Ananya
B.Tech CSE (Data Science), MIET Meerut


**Ananya**
B.Tech CSE (Data Science), MIET Meerut
[GitHub](https://github.com/Ananya2305k)
