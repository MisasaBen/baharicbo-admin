import { notFound } from "next/navigation";
import {
  Activity,
  AlertTriangle,
  Droplets,
  MapPinned,
  Thermometer,
  Waves,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sites = {
  "imta-cage-1": {
    name: "IMTA Cage 1",
    location: "Kilifi Coast",
    sensors: 4,
    lastUpdate: "5 minutes ago",
    status: "warning",
  },
  "seaweed-line-a": {
    name: "Seaweed Line A",
    location: "Kilifi Coast",
    sensors: 2,
    lastUpdate: "1 minute ago",
    status: "active",
  },
};

const metrics = {
  temperature: "27.4°C",
  ph: "7.9",
  salinity: "33 ppt",
  turbidity: "4 NTU",
};

const alerts = [
  {
    title: "Temperature above recommended range",
    time: "Today, 11:20 AM",
    severity: "Warning",
  },
  {
    title: "Turbidity increasing",
    time: "Today, 09:10 AM",
    severity: "Warning",
  },
];

export default async function SitePage({
  params,
}: {
  params: Promise<{ siteId: string }>;
}) {
  const { siteId } = await params;
  const site = sites[siteId as keyof typeof sites];

  if (!site) return notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Site Header */}
      <section className="mb-8 rounded-3xl border border-[var(--admin-border)] bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <MapPinned size={14} />
              Monitoring Site
            </div>

            <h1 className="mt-3 text-3xl font-bold text-[var(--admin-primary-deep)]">
              {site.name}
            </h1>

            <p className="mt-1 text-sm text-[var(--admin-muted)]">
              {site.location} • {site.sensors} sensors connected
            </p>
          </div>

          <Button className="rounded-2xl bg-[var(--admin-primary)] text-white hover:bg-[var(--admin-primary-deep)]">
            Edit Site
          </Button>
        </div>
      </section>

      {/* Metrics */}
      <section className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          icon={<Thermometer size={24} />}
          label="Temperature"
          value={metrics.temperature}
        />

        <MetricCard
          icon={<Droplets size={24} />}
          label="pH"
          value={metrics.ph}
        />

        <MetricCard
          icon={<Waves size={24} />}
          label="Salinity"
          value={metrics.salinity}
        />

        <MetricCard
          icon={<Activity size={24} />}
          label="Turbidity"
          value={metrics.turbidity}
        />
      </section>

      {/* Sensors */}
      <section className="mb-8">
        <Card className="rounded-3xl border-[var(--admin-border)] bg-white shadow-sm">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-[var(--admin-primary-deep)]">
              Connected Sensors
            </h3>

            <div className="space-y-4">
              <SensorRow name="Temperature Sensor" status="Active" />
              <SensorRow name="pH Sensor" status="Active" />
              <SensorRow name="Salinity Sensor" status="Active" />
              <SensorRow name="Turbidity Sensor" status="Active" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Alerts */}
      <section>
        <Card className="rounded-3xl border-[var(--admin-border)] bg-white shadow-sm">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-[var(--admin-primary-deep)]">
              Recent Alerts
            </h3>

            <div className="space-y-4">
              {alerts.map((alert, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between rounded-xl border border-[var(--admin-border)] bg-[var(--admin-surface)] px-4 py-3"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle
                      size={18}
                      className="text-amber-600 mt-0.5"
                    />

                    <div>
                      <div className="font-medium text-slate-800">
                        {alert.title}
                      </div>
                      <div className="text-sm text-[var(--admin-muted)]">
                        {alert.time}
                      </div>
                    </div>
                  </div>

                  <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                    {alert.severity}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <Card className="rounded-3xl border-[var(--admin-border)] bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm text-[var(--admin-muted)]">
              {label}
            </div>

            <div className="mt-2 text-2xl font-bold text-[var(--admin-primary-deep)]">
              {value}
            </div>
          </div>

          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--admin-primary-soft)] text-[var(--admin-primary)]">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SensorRow({
  name,
  status,
}: {
  name: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-[var(--admin-border)] bg-[var(--admin-surface)] px-4 py-3">
      <div className="font-medium text-slate-800">{name}</div>

      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
        {status}
      </span>
    </div>
  );
}