import { ClerkProvider } from "@clerk/nextjs";
import { Navigation } from "../components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "var(--brand-primary)",
          colorBackground: "var(--color-background)",
          colorInputBackground: "var(--surface-elevated)",
          colorInputText: "var(--color-foreground)",
          colorText: "var(--color-foreground)",
          colorTextSecondary: "var(--color-muted-foreground)",
          colorNeutral: "var(--color-muted)",
          colorDanger: "var(--color-danger)",
          colorSuccess: "var(--color-success)",
          colorWarning: "var(--color-warning)",
          colorShimmer: "var(--glass-border)",
          fontFamily: "var(--font-sans)",
          fontFamilyButtons: "var(--font-sans)",
          borderRadius: "var(--radius-md)",
          fontSize: ".9rem",
          fontWeight: {
            normal: "400",
            medium: "500",
            bold: "700",
          },
          spacingUnit: "var(--space-4)",
        },
        elements: {
          rootBox: {
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
          },
          card: {
            backgroundColor: "var(--surface-elevated)",
            border: "1px solid var(--glass-border)",
            borderRadius: "var(--radius-md)",
            backdropFilter: "blur(var(--glass-blur))",
            boxShadow: "var(--glass-shadow)",
          },
          formButtonPrimary: {
            backgroundColor: "var(--brand-primary)",
            backgroundImage:
              "linear-gradient(135deg, var(--brand-primary), var(--brand-primary-light))",
            color: "var(--color-primary-foreground)",
            borderRadius: "var(--radius-md)",
            fontSize: "0.875rem",
            fontWeight: "500",
            border: "1px solid rgba(126, 156, 216, 0.3)",
            transition: "all var(--transition-base)",
            "&:hover": {
              backgroundImage:
                "linear-gradient(135deg, var(--brand-primary-hover), var(--brand-primary))",
              transform: "translateY(-1px)",
              boxShadow: "0 2px 6px oklch(0% 0 0 / 0.15)",
            },
            "&:focus": {
              outline: "2px solid var(--brand-primary)",
              outlineOffset: "2px",
            },
          },
          formFieldInput: {
            backgroundColor: "var(--surface-elevated)",
            borderColor: "var(--glass-border)",
            color: "var(--color-foreground)",
            borderRadius: "var(--radius-md)",
            transition: "all var(--transition-base)",
            "&:focus": {
              borderColor: "var(--brand-primary)",
              boxShadow: "0 0 0 2px rgba(126, 156, 216, 0.25)",
            },
            "&::placeholder": {
              color: "var(--color-muted-foreground)",
            },
          },
          socialButtonsBlockButton: {
            backgroundColor: "var(--surface-elevated)",
            border: "1px solid var(--glass-border)",
            color: "var(--color-foreground)",
            borderRadius: "var(--radius-md)",
            transition: "all var(--transition-base)",
            "&:hover": {
              backgroundColor: "var(--color-accent)",
              transform: "translateY(-1px)",
              boxShadow: "var(--glass-shadow)",
            },
          },
          dividerLine: {
            backgroundColor: "var(--glass-border)",
          },
          dividerText: {
            color: "var(--color-muted-foreground)",
            fontSize: "0.875rem",
          },
          footerActionLink: {
            color: "var(--brand-primary)",
            textDecoration: "none",
            transition: "color var(--transition-base)",
            "&:hover": {
              color: "var(--brand-primary-hover)",
            },
          },
          formHeaderTitle: {
            color: "var(--color-foreground)",
            fontSize: "1.5rem",
            fontWeight: "600",
          },
          formHeaderSubtitle: {
            color: "var(--color-muted-foreground)",
            fontSize: "0.875rem",
          },
          formFieldLabel: {
            color: "var(--color-foreground)",
            fontSize: "0.875rem",
            fontWeight: "500",
          },
          formFieldAction: {
            color: "var(--brand-primary)",
            fontSize: "0.875rem",
            "&:hover": {
              color: "var(--brand-primary-hover)",
            },
          },
          identityPreviewText: {
            color: "var(--color-foreground)",
          },
          identityPreviewEditButton: {
            color: "var(--brand-primary)",
            "&:hover": {
              color: "var(--brand-primary-hover)",
            },
          },
          formFieldErrorText: {
            color: "var(--color-danger)",
            fontSize: "0.75rem",
          },
          formFieldSuccessText: {
            color: "var(--color-success)",
            fontSize: "0.75rem",
          },
          formFieldWarningText: {
            color: "var(--color-warning)",
            fontSize: "0.75rem",
          },
          profileSectionTitle: {
            color: "var(--color-foreground)",
            fontSize: "1.125rem",
            fontWeight: "600",
          },
          profileSectionContent: {
            color: "var(--color-muted-foreground)",
          },
          badge: {
            color: "var(--color-foreground)",
            backgroundColor: "var(--color-accent)",
            border: "1px solid var(--glass-border)",
            borderRadius: "var(--radius-sm)",
            fontSize: "0.75rem",
            padding: "0.25rem 0.5rem",
          },
          menuButton: {
            color: "var(--color-foreground)",
            transition: "all var(--transition-base)",
            "&:hover": {
              backgroundColor: "var(--kanagawa-bg-light1)",
              color: "var(--kanagawa-fg)",
            },
          },
          menuItem: {
            color: "var(--color-foreground)",
            padding: "0.5rem 1rem",
            transition: "all var(--transition-base)",
            "&:hover": {
              backgroundColor: "var(--kanagawa-bg-light1)",
              color: "var(--kanagawa-fg)",
            },
          },
          userButtonPopoverCard: {
            backgroundColor: "var(--surface-elevated)",
            border: "1px solid var(--glass-border)",
            backdropFilter: "blur(var(--glass-blur))",
            boxShadow: "var(--glass-shadow)",
            borderRadius: "var(--radius-md)",
          },
          userButtonPopoverActionButton: {
            color: "var(--color-foreground)",
            transition: "all var(--transition-base)",
            "&:hover": {
              backgroundColor: "var(--kanagawa-bg-light1)",
              color: "var(--kanagawa-fg)",
            },
          },
          userButtonPopoverActionButtonText: {
            color: "var(--color-foreground)",
          },
          userButtonPopoverFooter: {
            borderTop: "1px solid var(--glass-border)",
          },
          organizationSwitcherTrigger: {
            color: "var(--color-foreground)",
            backgroundColor: "var(--surface-elevated)",
            border: "1px solid var(--glass-border)",
            borderRadius: "var(--radius-md)",
            transition: "all var(--transition-base)",
            "&:hover": {
              backgroundColor: "var(--color-accent)",
            },
          },
          organizationSwitcherPopoverCard: {
            backgroundColor: "var(--surface-elevated)",
            border: "1px solid var(--glass-border)",
            backdropFilter: "blur(var(--glass-blur))",
            boxShadow: "var(--glass-shadow)",
            borderRadius: "var(--radius-md)",
          },
          organizationSwitcherPopoverActionButton: {
            color: "var(--color-foreground)",
            transition: "all var(--transition-base)",
            "&:hover": {
              backgroundColor: "var(--kanagawa-bg-light1)",
              color: "var(--kanagawa-fg)",
            },
          },
          navbarMobileMenuButton: {
            color: "var(--color-foreground)",
          },
          headerTitle: {
            color: "var(--color-foreground)",
          },
          headerSubtitle: {
            color: "var(--color-muted-foreground)",
          },
        },
      }}
    >
      <div className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
      </div>
    </ClerkProvider>
  );
}
