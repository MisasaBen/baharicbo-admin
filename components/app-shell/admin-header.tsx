"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Bell, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const pageMeta: Record<string, { title: string; subtitle: string }> = {
  "/dashboard": {
    title: "Admin Dashboard",
    subtitle: "System-wide overview and operational health",
  },
  "/sites": {
    title: "Sites",
    subtitle: "Manage monitored locations and site status",
  },
  "/users": {
    title: "Users",
    subtitle: "Farmer, staff, and admin account management",
  },
  "/alerts": {
    title: "Alerts",
    subtitle: "Review warnings, events, and incident activity",
  },
  "/thresholds": {
    title: "Thresholds",
    subtitle: "Configure parameter limits and alert boundaries",
  },
  "/reports": {
    title: "Reports",
    subtitle: "Generate summaries and operational insights",
  },
  "/integrations": {
    title: "Integrations",
    subtitle: "Monitor external systems and data connections",
  },
  "/settings": {
    title: "Settings",
    subtitle: "Platform preferences and organization controls",
  },
};

export default function AdminHeader() {
  const pathname = usePathname();

  const meta = useMemo(() => {
    const entry = Object.entries(pageMeta).find(([path]) =>
      pathname.startsWith(path)
    );
    return (
      entry?.[1] ?? {
        title: "Bahari Admin",
        subtitle: "Administrative platform",
      }
    );
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--admin-border)] bg-white/90 backdrop-blur">
      <div className="flex min-h-18 items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <h1 className="truncate text-xl font-bold tracking-tight text-[var(--admin-primary-deep)]">
            {meta.title}
          </h1>
          <p className="truncate text-sm text-[var(--admin-muted)]">
            {meta.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 md:inline-flex">
            <ShieldCheck size={14} />
            System healthy
          </div>

          <Button
            variant="outline"
            size="sm"
            className="rounded-2xl border-[var(--admin-border)] bg-white hover:bg-slate-50"
          >
            <Search size={16} />
            <span className="hidden sm:inline">Search</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="rounded-2xl border-[var(--admin-border)] bg-white hover:bg-slate-50"
          >
            <Bell size={16} />
            <span className="hidden sm:inline">Alerts</span>
          </Button>

          <div className="ml-1 flex items-center gap-3 rounded-full border border-[var(--admin-border)] bg-white px-2.5 py-1.5 shadow-sm">
            <div className="hidden text-right sm:block">
              <div className="text-sm font-medium text-slate-800">Admin</div>
              <div className="text-[11px] text-[var(--admin-muted)]">
                Superuser
              </div>
            </div>

            <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--admin-primary)] text-sm font-bold text-white">
              A
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}