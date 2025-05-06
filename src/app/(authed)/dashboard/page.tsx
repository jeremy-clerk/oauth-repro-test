import { OrganizationSwitcher, UserButton, UserProfile } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-6">
      <UserButton />
      <OrganizationSwitcher />
      <UserProfile routing={"hash"} />
    </div>
  );
}
