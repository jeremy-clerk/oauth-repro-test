"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-primary">
              OAuth Test
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <SignedIn>
              <Link
                href="/dashboard"
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-accent"
              >
                Dashboard
              </Link>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
