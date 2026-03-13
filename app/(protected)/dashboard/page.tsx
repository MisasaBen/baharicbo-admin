import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  Database,
  Link2,
  MapPinned,
  ShieldCheck,
  Users,
  Waves,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const statCards = [
  {
    title: "Monitored Sites",
    value: "3",
    hint: "Active locations",
    icon: MapPinned,
    tone: "default",
  },
  {
    title: "Active Alerts",
    value: "1",
    hint: "Needs review",
    icon: AlertTriangle,
    tone: "warning",
  },
  {
    title: "Platform Users",
    value: "12",
    hint: "Across all roles",
    icon: Users,
    tone: "default",
  },
  {
    title: "Connected Sensors",
    value: "8",
    hint: "Reporting data",
    icon: Database,
    tone: "default",
  },
];

const sitesNeedingAttention = [
  {
    site: "IMTA Cage 1",
    issue: "Temperature briefly exceeded preferred range",
    status: "Warning",
  },
  {
    site: "Seaweed Line A",
    issue: "Turbidity trend increasing over recent readings",
    status: "Attention",
  },
];

const recentAlerts = [
  {
    title: "Temperature above preferred range",
    site: "IMTA Cage 1",
    time: "Today, 11:20 AM",
    severity: "Warning",
  },
  {
    title: "Turbidity increasing",
    site: "Seaweed Line A",
    time: "Today, 09:10 AM",
    severity: "Warning",
  },
  {
    title: "Previous fluctuation resolved",
    site: "IMTA Cage 2",
    time: "Yesterday, 04:35 PM",
    severity: "Resolved",
  },
];

const integrationSummary = [
  { label: "Wireless Planet API", value: "Pending live connection" },
  { label: "SMS/Alert Gateway", value: "Not yet configured" },
  { label: "Last sync", value: "Mock environment" },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Intro */}
      <section className="mb-8 flex flex-col gap-4 rounded-3xl border border-[var(--admin-border)] bg-white p-6 shadow-sm lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            <ShieldCheck size={14} />
            Administrative overview
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--admin-primary-deep)]">
            Welcome back.
          </h2>
          <p className="mt-2 text-sm leading-6 text-[var(--admin-muted)]">
            Review monitored sites, alert activity, user access, and integration readiness across the Bahari Blue Empowerment platform.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button className="rounded-2xl bg-[var(--admin-primary)] text-white hover:bg-[var(--admin-primary-deep)]">
            Review alerts
          </Button>
          <Button
            variant="outline"
            className="rounded-2xl border-[var(--admin-border)] bg-white hover:bg-slate-50"
          >
            View reports
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          const iconTone =
            card.tone === "warning"
              ? "bg-amber-50 text-amber-700"
              : "bg-[var(--admin-primary-soft)] text-[var(--admin-primary)]";

          return (
            <Card
              key={card.title}
              className="rounded-3xl border-[var(--admin-border)] bg-white shadow-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium text-[var(--admin-muted)]">
                      {card.title}
                    </div>
                    <div className="mt-3 text-4xl font-extrabold tracking-tight text-[var(--admin-primary-deep)]">
                      {card.value}
                    </div>
                    <div className="mt-2 text-sm text-slate-500">
                      {card.hint}
                    </div>
                  </div>

                  <div className={`grid h-12 w-12 place-items-center rounded-2xl ${iconTone}`}>
                    <Icon size={22} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* Main content grid */}
      <section className="grid gap-6 xl:grid-cols-3">
        {/* Sites needing attention */}
        <Card className="rounded-3xl border-[var(--admin-border)] bg-white shadow-sm xl:col-span-2">
          <CardContent className="p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[var(--admin-primary-deep)]">
                  Sites needing attention
                </h3>
                <p className="text-sm text-[var(--admin-muted)]">
                  Recent site activity requiring review or follow-up
                </p>
              </div>

              <Button
                variant="outline"
                className="rounded-2xl border-[var(--admin-border)] bg-white hover:bg-slate-50"
              >
                View all sites
              </Button>
            </div>

            <div className="space-y-4">
              {sitesNeedingAttention.map((item) => (
                <div
                  key={item.site}
                  className="rounded-2xl border border-[var(--admin-border)] bg-[var(--admin-surface)] px-5 py-4"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="font-semibold text-slate-800">
                        {item.site}
                      </div>
                      <div className="mt-1 text-sm leading-6 text-[var(--admin-muted)]">
                        {item.issue}
                      </div>
                    </div>

                    <StatusPill
                      label={item.status}
                      tone="warning"
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Integration snapshot */}
        <Card className="rounded-3xl border-[var(--admin-border)] bg-white shadow-sm xl:col-span-1">
          <CardContent className="p-6">
            <div className="mb-5 inline-flex items-center gap-2 font-semibold text-[var(--admin-primary-deep)]">
              <Link2 size={18} />
              Integration snapshot
            </div>

            <div className="space-y-4">
              {integrationSummary.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[var(--admin-border)] bg-[var(--admin-surface)] px-4 py-4"
                >
                  <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {item.label}
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-800">
                    {item.value}
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  <CheckCircle2 size={16} />
                  Admin shell ready
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  The control interface is prepared for site, user, and threshold management while backend services are finalized.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent alerts */}
        <Card className="rounded-3xl border-[var(--admin-border)] bg-white shadow-sm xl:col-span-2">
          <CardContent className="p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[var(--admin-primary-deep)]">
                  Recent alerts
                </h3>
                <p className="text-sm text-[var(--admin-muted)]">
                  Most recent system events across monitored sites
                </p>
              </div>

              <Button
                variant="outline"
                className="rounded-2xl border-[var(--admin-border)] bg-white hover:bg-slate-50"
              >
                Open alerts
              </Button>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[var(--admin-border)]">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-[var(--admin-surface)]">
                  <tr className="text-slate-500">
                    <th className="px-4 py-3 font-medium">Alert</th>
                    <th className="px-4 py-3 font-medium">Site</th>
                    <th className="px-4 py-3 font-medium">Time</th>
                    <th className="px-4 py-3 font-medium">Severity</th>
                  </tr>
                </thead>
                <tbody>
                  {recentAlerts.map((row, index) => (
                    <tr key={`${row.title}-${index}`} className="border-t border-[var(--admin-border)]">
                      <td className="px-4 py-4 font-medium text-slate-800">
                        {row.title}
                      </td>
                      <td className="px-4 py-4 text-[var(--admin-muted)]">
                        {row.site}
                      </td>
                      <td className="px-4 py-4 text-[var(--admin-muted)]">
                        {row.time}
                      </td>
                      <td className="px-4 py-4">
                        <StatusPill
                          label={row.severity}
                          tone={row.severity === "Resolved" ? "normal" : "warning"}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Quick actions */}
        <Card className="rounded-3xl border-[var(--admin-border)] bg-white shadow-sm xl:col-span-1">
          <CardContent className="p-6">
            <div className="mb-5 inline-flex items-center gap-2 font-semibold text-[var(--admin-primary-deep)]">
              <Bell size={18} />
              Quick actions
            </div>

            <div className="space-y-3">
              <QuickAction title="Review active alerts" desc="Check site warnings and recent events." />
              <QuickAction title="Manage thresholds" desc="Adjust parameter limits and alert rules." />
              <QuickAction title="Open integrations" desc="Prepare API and sync configuration." />
            </div>

            <div className="mt-5 rounded-2xl border bg-[var(--admin-primary-soft)]/35 p-4">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--admin-primary-deep)]">
                <Waves size={16} />
                Platform note
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                This admin dashboard is currently powered by mock operational data and is ready for backend connection.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function StatusPill({
  label,
  tone,
}: {
  label: string;
  tone: "normal" | "warning";
}) {
  const classes =
    tone === "normal"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : "border-amber-200 bg-amber-50 text-amber-700";

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold ${classes}`}>
      {label}
    </span>
  );
}

function QuickAction({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--admin-border)] bg-[var(--admin-surface)] px-4 py-4">
      <div className="font-medium text-slate-800">{title}</div>
      <div className="mt-1 text-sm leading-6 text-[var(--admin-muted)]">
        {desc}
      </div>
    </div>
  );
}