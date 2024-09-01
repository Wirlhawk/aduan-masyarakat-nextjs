import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
export { default } from "next-auth/middleware";

// export async function middleware(req) {
//     const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

//     if (
//         token &&
//         (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/register")
//     ) {
//         return NextResponse.redirect(new URL("/", req.url)); // Redirect to homepage or another page
//     }

//     // Default behavior for other pages (authenticated users should be able to access)
//     return NextResponse.next();
// }

// export const config = {
//     matcher: ["/login", "/register", "/((?!register|login).*)"], // Ensure the middleware applies to all pages
// };
export const config = { matcher: ["/((?!register|login).*)"] };
