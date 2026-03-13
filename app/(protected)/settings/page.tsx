import { Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6">

      <h1 className="text-2xl font-bold text-[var(--admin-primary-deep)] mb-6">
        System Settings
      </h1>

      <Card className="rounded-3xl border-[var(--admin-border)]">
        <CardContent className="p-6 space-y-6">

          <div>
            <label className="text-sm text-[var(--admin-muted)]">
              Organization Name
            </label>
            <Input defaultValue="Bahari CBO Network" />
          </div>

          <div>
            <label className="text-sm text-[var(--admin-muted)]">
              Contact Email
            </label>
            <Input defaultValue="info@baharicbo.org" />
          </div>

          <div>
            <label className="text-sm text-[var(--admin-muted)]">
              Default Alert Threshold Interval
            </label>
            <Input defaultValue="5 minutes" />
          </div>

          <Button className="rounded-xl bg-[var(--admin-primary)] text-white">
            Save Settings
          </Button>

        </CardContent>
      </Card>

    </div>
  )
}