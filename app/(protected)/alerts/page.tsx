import { AlertTriangle, CheckCircle2, Thermometer, Waves, Droplets, Activity } from "lucide-react"
import type { Alert } from "@/types/alert"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const alerts: Alert[] = [
  {
    id: "A102",
    site: "IMTA Cage 1",
    parameter: "Temperature",
    value: "31.8°C",
    severity: "warning",
    time: "Today 11:20",
    status: "active"
  },
  {
    id: "A103",
    site: "Seaweed Line A",
    parameter: "Turbidity",
    value: "12 NTU",
    severity: "warning",
    time: "Today 09:12",
    status: "active"
  },
  {
    id: "A097",
    site: "IMTA Cage 2",
    parameter: "pH",
    value: "6.9",
    severity: "critical",
    time: "Yesterday 18:20",
    status: "resolved"
  }
]

export default function AlertsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      {/* Page intro */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--admin-primary-deep)]">
          System Alerts
        </h1>

        <p className="mt-1 text-sm text-[var(--admin-muted)]">
          Monitor environmental warnings triggered by sensor readings exceeding configured thresholds.
        </p>
      </section>

      {/* Summary cards */}
      <section className="grid gap-6 md:grid-cols-4 mb-8">

        <SummaryCard
          title="Total Alerts"
          value="23"
          icon={<AlertTriangle size={18} />}
        />

        <SummaryCard
          title="Active"
          value="7"
          icon={<AlertTriangle size={18} />}
        />

        <SummaryCard
          title="Critical"
          value="2"
          icon={<AlertTriangle size={18} />}
        />

        <SummaryCard
          title="Resolved"
          value="16"
          icon={<CheckCircle2 size={18} />}
        />

      </section>

      {/* Alerts list */}
      <section className="space-y-4">

        {alerts.map(alert => (
          <AlertRow key={alert.id} alert={alert} />
        ))}

      </section>

    </div>
  )
}

function SummaryCard({
  title,
  value,
  icon
}: {
  title: string
  value: string
  icon: React.ReactNode
}) {
  return (
    <Card className="rounded-3xl border-[var(--admin-border)] bg-white shadow-sm">
      <CardContent className="p-6 flex items-center justify-between">

        <div>
          <div className="text-sm text-[var(--admin-muted)]">{title}</div>
          <div className="text-2xl font-bold text-[var(--admin-primary-deep)]">
            {value}
          </div>
        </div>

        <div className="h-10 w-10 rounded-xl grid place-items-center bg-[var(--admin-primary-soft)] text-[var(--admin-primary)]">
          {icon}
        </div>

      </CardContent>
    </Card>
  )
}

function AlertRow({ alert }: { alert: Alert }) {

  const severityColor =
    alert.severity === "critical"
      ? "bg-red-100 text-red-700"
      : "bg-amber-100 text-amber-700"

  const statusColor =
    alert.status === "resolved"
      ? "bg-emerald-100 text-emerald-700"
      : "bg-blue-100 text-blue-700"

  const icon = {
    Temperature: <Thermometer size={16} />,
    Turbidity: <Activity size={16} />,
    Salinity: <Waves size={16} />,
    pH: <Droplets size={16} />
  }[alert.parameter]

  return (
    <Card className="rounded-3xl border-[var(--admin-border)] bg-white shadow-sm">
      <CardContent className="p-5 flex items-center justify-between gap-6">

        <div className="flex items-center gap-4">

          <div className="h-9 w-9 rounded-xl bg-gray-100 grid place-items-center text-gray-700">
            {icon}
          </div>

          <div>
            <div className="font-semibold text-[var(--admin-primary-deep)]">
              {alert.parameter} alert
            </div>

            <div className="text-xs text-[var(--admin-muted)]">
              {alert.site} • {alert.time}
            </div>
          </div>

        </div>

        <div className="text-sm font-semibold">
          {alert.value}
        </div>

        <div className={`text-xs px-3 py-1 rounded-xl ${severityColor}`}>
          {alert.severity}
        </div>

        <div className={`text-xs px-3 py-1 rounded-xl ${statusColor}`}>
          {alert.status}
        </div>

        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="rounded-xl">
            View
          </Button>

          {alert.status === "active" && (
            <Button size="sm" className="rounded-xl bg-[var(--admin-primary)]">
              Resolve
            </Button>
          )}
        </div>

      </CardContent>
    </Card>
  )
}