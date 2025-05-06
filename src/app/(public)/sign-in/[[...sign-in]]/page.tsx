import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className={"w-full h-full flex justify-center flex-col items-center"}>
      <SignIn />
    </div>
  );
}
