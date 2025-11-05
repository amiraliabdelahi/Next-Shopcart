# Next.js Shopcart

A full-stack e-commerce web application built with **Next.js**, **Prisma**, and **Auth.js (NextAuth)**. This project includes authentication, an admin panel, and a shopping cart system.

---

## 🛠 Tech Stack

- **Frontend:** Next.js, React  
- **Backend:** Next.js API Routes, Prisma ORM  
- **Database:** MySQL  
- **Authentication:** Auth.js (NextAuth) with JWT sessions, Credentials Provider  
- **Validation:** Zod  
- **Password Security:** bcryptjs  
- **Styling:** Tailwind CSS (if used)  
- **Version Control:** GitHub

---

## ⚡ Features

- User authentication and authorization (Admin & User roles)  
- Admin panel for managing products  
- Shopping cart with product CRUD operations  
- Data validation with Zod  
- Password hashing with bcryptjs

---

## Install dependencies:

```js
npm install
# or
bun install
```

## Set up environment variables (.env):

```js
DATABASE_URL="mysql://user:password@localhost:3306/dbname"
AUTH_SECRET="your-secret"
```

## Push Prisma schema to your database:

```js
npx prisma db push
```
