"use client";
import {
  OrganizationSwitcher,
  UserButton,
  useSession,
  useUser,
} from "@clerk/nextjs";

export default function Dashboard() {
  const { isLoaded, isSignedIn, session } = useSession();
  const { user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner w-12 h-12"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          OAuth Test Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="glass-card">
            <h2 className="text-xl font-semibold text-card-foreground mb-4">
              User Information
            </h2>
            <div className="space-y-3 font-mono text-sm">
              <div>
                <span className="text-muted-foreground">ID:</span>{" "}
                <span className="text-card-foreground">{user?.id}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Email:</span>{" "}
                <span className="text-card-foreground">
                  {user?.primaryEmailAddress?.emailAddress}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Name:</span>{" "}
                <span className="text-card-foreground">
                  {user?.fullName || "Not set"}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Created:</span>{" "}
                <span className="text-card-foreground">
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleString()
                    : "Unknown"}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Last Sign In:</span>{" "}
                <span className="text-card-foreground">
                  {user?.lastSignInAt
                    ? new Date(user.lastSignInAt).toLocaleString()
                    : "Unknown"}
                </span>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <h2 className="text-xl font-semibold text-card-foreground mb-4">
              Session Information
            </h2>
            <div className="space-y-3 font-mono text-sm">
              <div>
                <span className="text-muted-foreground">Session ID:</span>{" "}
                <span className="text-card-foreground break-all">
                  {session?.id}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Status:</span>{" "}
                <span className="accent-emerald font-semibold">
                  {session?.status}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Created:</span>{" "}
                <span className="text-card-foreground">
                  {session?.createdAt
                    ? new Date(session.createdAt).toLocaleString()
                    : "Unknown"}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Expires:</span>{" "}
                <span className="text-card-foreground">
                  {session?.expireAt
                    ? new Date(session.expireAt).toLocaleString()
                    : "Unknown"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card mb-8">
          <h2 className="text-xl font-semibold text-card-foreground mb-4">
            Organization Context
          </h2>
          <div className="flex items-center justify-center py-4">
            <OrganizationSwitcher />
          </div>
        </div>

        <div className="glass-card">
          <h2 className="text-xl font-semibold text-card-foreground mb-4">
            Test Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => window.location.reload()}
              className="glass p-4 text-left transition-all"
            >
              <h3 className="font-medium text-card-foreground mb-1">
                Refresh Session
              </h3>
              <p className="text-sm text-muted-foreground">
                Test session refresh flow
              </p>
            </button>

            <button
              onClick={() => {
                if (user) {
                  console.log("User Object:", user);
                  console.log("Session Object:", session);
                }
              }}
              className="glass p-4 text-left transition-all"
            >
              <h3 className="font-medium text-card-foreground mb-1">
                Log to Console
              </h3>
              <p className="text-sm text-muted-foreground">
                Debug user/session data
              </p>
            </button>

            <UserButton
              appearance={{
                elements: {
                  trigger: "w-full glass p-4 text-left transition-all",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
