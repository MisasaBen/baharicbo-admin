import { SlidersHorizontal, Thermometer, Droplets, Waves, Activity } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ThresholdsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">

      {/* Page intro */}
      <section className="mb-8 rounded-3xl border border-[var(--admin-border)] bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <SlidersHorizontal className="text-[var(--admin-primary)]" size={22} />

          <div>
            <h1 className="text-2xl font-bold text-[var(--admin-primary-deep)]">
              Monitoring Thresholds
            </h1>

            <p className="mt-1 text-sm text-[var(--admin-muted)]">
              Configure environmental parameter limits. When sensor readings
              exceed these thresholds the system will generate alerts.
            </p>
          </div>
        </div>
      </section>

      {/* Threshold grid */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <ThresholdCard
          icon={<Thermometer size={20} />}
          title="Temperature"
          unit="°C"
          min="24"
          max="31"
        />

        <ThresholdCard
          icon={<Droplets size={20} />}
          title="pH"
          unit=""
          min="7.2"
          max="8.6"
        />

        <ThresholdCard
          icon={<Waves size={20} />}
          title="Salinity"
          unit="ppt"
          min="28"
          max="38"
        />

        <ThresholdCard
          icon={<Activity size={20} />}
          title="Turbidity"
          unit="NTU"
          min="0"
          max="10"
        />

      </section>

      {/* Actions */}
      <section className="mt-8 flex gap-3">
        <Button className="rounded-2xl bg-[var(--admin-primary)] text-white hover:bg-[var(--admin-primary-deep)]">
          Save Changes
        </Button>

        <Button
          variant="outline"
          className="rounded-2xl border-[var(--admin-border)]"
        >
          Reset Defaults
        </Button>
      </section>
    </div>
  );
}

function ThresholdCard({
  icon,
  title,
  unit,
  min,
  max,
}: {
  icon: React.ReactNode;
  title: string;
  unit: string;
  min: string;
  max: string;
}) {
  return (
    <Card className="rounded-3xl border-[var(--admin-border)] bg-white shadow-sm">
      <CardContent className="p-6">

        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-[var(--admin-muted)]">
            {title}
          </div>

          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--admin-primary-soft)] text-[var(--admin-primary)]">
            {icon}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">

          <div>
            <div className="text-xs text-[var(--admin-muted)]">Min</div>
            <Input defaultValue={min} className="mt-1 h-10 rounded-xl" />
          </div>

          <div>
            <div className="text-xs text-[var(--admin-muted)]">Max</div>
            <Input defaultValue={max} className="mt-1 h-10 rounded-xl" />
          </div>

        </div>

        {unit && (
          <div className="mt-3 text-xs text-[var(--admin-muted)]">
            Unit: {unit}
          </div>
        )}

      </CardContent>
    </Card>
  );
}