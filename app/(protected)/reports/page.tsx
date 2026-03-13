import { FileBarChart, Download, Calendar } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const reports = [
  {
    id: "R01",
    title: "Weekly Environmental Summary",
    site: "IMTA Cage 1",
    date: "2026-03-10",
    status: "Generated",
  },
  {
    id: "R02",
    title: "Monthly Water Quality Analysis",
    site: "Seaweed Line A",
    date: "2026-03-01",
    status: "Generated",
  },
]

export default function ReportsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      <section className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--admin-primary-deep)]">
          Reports
        </h1>

        <p className="text-sm text-[var(--admin-muted)]">
          Generate and download environmental monitoring reports.
        </p>
      </section>

      {/* Quick generation */}
      <section className="grid md:grid-cols-3 gap-6 mb-10">

        <ReportCard
          title="Weekly Monitoring Report"
          description="Summarizes environmental metrics for the past week."
        />

        <ReportCard
          title="Monthly Water Quality Report"
          description="Detailed analysis of pH, temperature and salinity trends."
        />

        <ReportCard
          title="Custom Date Range"
          description="Generate a report for a selected time period."
        />

      </section>

      {/* Generated reports */}
      <section className="space-y-4">

        {reports.map(report => (
          <ReportRow key={report.id} report={report} />
        ))}

      </section>

    </div>
  )
}

function ReportCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <Card className="rounded-3xl border-[var(--admin-border)] bg-white shadow-sm">
      <CardContent className="p-6 space-y-3">

        <div className="flex items-center gap-3">
          <FileBarChart size={18} className="text-[var(--admin-primary)]" />
          <div className="font-semibold text-[var(--admin-primary-deep)]">
            {title}
          </div>
        </div>

        <div className="text-sm text-[var(--admin-muted)]">
          {description}
        </div>

        <Button className="rounded-xl bg-[var(--admin-primary)] text-white">
          Generate Report
        </Button>

      </CardContent>
    </Card>
  )
}

function ReportRow({ report }: { report: any }) {
  return (
    <Card className="rounded-3xl border-[var(--admin-border)] bg-white shadow-sm">
      <CardContent className="p-5 flex items-center justify-between">

        <div>
          <div className="font-semibold text-[var(--admin-primary-deep)]">
            {report.title}
          </div>

          <div className="text-xs text-[var(--admin-muted)]">
            {report.site} • {report.date}
          </div>
        </div>

        <div className="flex gap-2">

          <Button size="sm" variant="outline" className="rounded-xl">
            <Calendar size={14} /> View
          </Button>

          <Button size="sm" className="rounded-xl bg-[var(--admin-primary)] text-white">
            <Download size={14} /> Download
          </Button>

        </div>

      </CardContent>
    </Card>
  )
}