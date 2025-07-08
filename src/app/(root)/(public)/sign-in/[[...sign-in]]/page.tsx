import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div>
        <h1 className="text-2xl font-bold text-center text-foreground mb-6">
          Sign In - Standard Redirect
        </h1>
        <SignIn />
      </div>
    </div>
  );
}
