"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  FileText,
  LayoutDashboard,
  Map,
  Plug,
  Settings,
  SlidersHorizontal,
  Users,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Sites", href: "/sites", icon: Map },
  { label: "Users", href: "/users", icon: Users },
  { label: "Alerts", href: "/alerts", icon: Bell },
  { label: "Thresholds", href: "/thresholds", icon: SlidersHorizontal },
  { label: "Reports", href: "/reports", icon: FileText },
  { label: "Integrations", href: "/integrations", icon: Plug },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block lg:w-72 lg:shrink-0">
      <div className="sticky top-0 flex h-screen flex-col border-r border-emerald-900/40 bg-[var(--admin-primary-deep)] text-white">
        {/* Brand */}
        <div className="border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-white/95 shadow-sm">
              <Image
                src="/logo-icon.png"
                alt="Bahari CBO Network logo"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="min-w-0">
              <div className="truncate text-lg font-bold tracking-tight text-white">
                Bahari Admin
              </div>
              <div className="truncate text-xs text-emerald-100/80">
                Blue Empowerment Platform
              </div>
            </div>
          </div>
        </div>

        {/* Section label */}
        <div className="px-4 pt-5">
          <div className="px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-100/55">
            Control Center
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-4">
          <div className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active =
                pathname === item.href ||
                (item.href !== "/dashboard" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-all duration-200",
                    active
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/20"
                      : "text-emerald-50/90 hover:bg-white/8 hover:text-white",
                  ].join(" ")}
                >
                  <Icon
                    size={18}
                    className={active ? "text-white" : "text-emerald-100/85 group-hover:text-white"}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom card */}
        <div className="p-4">
          <div className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
            <div className="text-sm font-semibold text-white">
              Operational overview
            </div>
            <p className="mt-1 text-xs leading-5 text-emerald-100/75">
              Manage monitored sites, thresholds, alerts, integrations, and system users from one place.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}