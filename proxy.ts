import { auth } from "./auth";
import { NextResponse } from "next/server";

const authRoutes = ["/login", "/signup"];
const protectedRoutes = ["/", "/shopcart", "/admin"];

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;

  // 🔒 Redirect unauthenticated users trying to access protected routes
  if (!isLoggedIn && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 🚪 Redirect logged-in users away from auth pages
  if (isLoggedIn && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
