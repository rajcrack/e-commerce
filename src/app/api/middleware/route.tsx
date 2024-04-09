// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
  
//   // Assuming you have a function to verify the user's role
//   const userRole = getUserRole(request);

//   // Define routes that require admin access
//   const adminRoutes = ['/admin/dashboard', '/admin/settings'];
//   // Define routes that require user access
//   const userRoutes = ['/user/profile', '/user/settings'];

//   // Redirect to login if not authenticated
//   if (!userRole && pathname.startsWith('/admin/') || pathname.startsWith('/user/')) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // Redirect if user does not have admin access
//   if (userRole !== 'admin' && adminRoutes.includes(pathname)) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }

//   // Redirect if user does not have user access
//   if (userRole !== 'user' && userRoutes.includes(pathname)) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }

//   return NextResponse.next();
// }

// // Mock function to get user role from the request
// function getUserRole(request: NextRequest): string | null {
//   // Implement your logic to retrieve user role from cookies, JWT, etc.
//   return null; // Placeholder return
// }