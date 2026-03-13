import Link from "next/link";
import { MapPinned, Plus, Search, Waves, AlertTriangle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sites = [
  {
    id: "imta-cage-1",
    name: "IMTA Cage 1",
    location: "Kilifi Coast",
    sensors: 4,
    lastUpdate: "5 minutes ago",
    status: "warning",
  },
  {
    id: "seaweed-line-a",
    name: "Seaweed Line A",
    location: "Kilifi Coast",
    sensors: 2,
    lastUpdate: "1 minute ago",
    status: "active",
  },
  {
    id: "seaweed-line-b",
    name: "Seaweed Line B",
    location: "Kilifi Coast",
    sensors: 2,
    lastUpdate: "3 minutes ago",
    status: "active",
  },
];

export default function SitesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Page intro */}
      <section className="mb-8 flex flex-col gap-4 rounded-3xl border border-[var(--admin-border)] bg-white p-6 shadow-sm lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            <MapPinned size={14} />
            Monitoring infrastructure
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--admin-primary-deep)]">
            Monitored Sites
          </h2>

          <p className="mt-2 text-sm leading-6 text-[var(--admin-muted)]">
            Manage aquaculture monitoring locations, sensors, and operational
            status across the Bahari Blue Empowerment network.
          </p>
        </div>

        <Button className="rounded-2xl bg-[var(--admin-primary)] text-white hover:bg-[var(--admin-primary-deep)]">
          <Plus size={16} />
          Add Site
        </Button>
      </section>

      {/* Search / filter */}
      <section className="mb-8 flex flex-col gap-4 rounded-3xl border border-[var(--admin-border)] bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full max-w-sm items-center gap-2">
          <Search size={18} className="text-slate-400" />
          <Input placeholder="Search sites..." className="h-10 rounded-xl" />
        </div>

        <div className="text-sm text-[var(--admin-muted)]">
          {sites.length} sites monitored
        </div>
      </section>

      {/* Sites grid */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sites.map((site) => (
          <Link key={site.id} href={`/sites/${site.id}`}>
            <Card className="cursor-pointer rounded-3xl border-[var(--admin-border)] bg-white shadow-sm transition hover:shadow-md">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-lg font-semibold text-slate-900">
                      {site.name}
                    </div>
                    <div className="mt-1 text-sm text-[var(--admin-muted)]">
                      {site.location}
                    </div>
                  </div>

                  <StatusBadge status={site.status} />
                </div>

                {/* Sensors */}
                <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
                  <Waves size={18} />
                  {site.sensors} sensors connected
                </div>

                {/* Last update */}
                <div className="mt-3 text-sm text-[var(--admin-muted)]">
                  Last data update: {site.lastUpdate}
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-[var(--admin-muted)]">
                    View site details
                  </span>

                  <span className="font-medium text-[var(--admin-primary)]">
                    Open →
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  if (status === "warning") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
        <AlertTriangle size={12} />
        Warning
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
      Active
    </span>
  );
}