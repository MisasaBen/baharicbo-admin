import { Plug, Smartphone, Database } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function IntegrationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">

      <h1 className="text-2xl font-bold text-[var(--admin-primary-deep)] mb-6">
        Integrations
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <IntegrationCard
          icon={<Database size={20} />}
          title="IoT Data API"
          description="Connect the platform to sensor data streams."
        />

        <IntegrationCard
          icon={<Smartphone size={20} />}
          title="SMS Alerts"
          description="Send SMS notifications when thresholds are exceeded."
        />

        <IntegrationCard
          icon={<Plug size={20} />}
          title="External Systems"
          description="Connect to analytics or data export services."
        />

      </div>

    </div>
  )
}

function IntegrationCard({ icon, title, description }: any) {
  return (
    <Card className="rounded-3xl border-[var(--admin-border)]">
      <CardContent className="p-6 space-y-3">

        <div className="flex items-center gap-2 text-[var(--admin-primary)]">
          {icon}
          <span className="font-semibold">{title}</span>
        </div>

        <p className="text-sm text-[var(--admin-muted)]">
          {description}
        </p>

        <Button className="rounded-xl bg-[var(--admin-primary)] text-white">
          Configure
        </Button>

      </CardContent>
    </Card>
  )
}