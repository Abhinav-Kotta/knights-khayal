import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Verify admin status
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      !req.nextauth?.token?.isAdmin
    ) {
      return NextResponse.rewrite(new URL("/admin/login", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/admin/:path*"],
};