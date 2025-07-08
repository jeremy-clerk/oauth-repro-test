import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="glass max-w-md w-full p-8 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          OAuth Debug App
        </h1>
        <p className="text-muted-foreground mb-8">
          Test authentication flows and OAuth configurations
        </p>

        <div className="space-y-4">
          <Link href={"/sign-in"}>
            <button className="btn-primary w-full">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
