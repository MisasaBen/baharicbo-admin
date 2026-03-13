import { Users, UserPlus, Shield, Wrench, Leaf } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type UserRole = "Admin" | "Technical Staff" | "Farmer"

interface User {
  id: string
  name: string
  role: UserRole
  email: string
  phone: string
  status: "active" | "disabled"
}

const users: User[] = [
  {
    id: "U01",
    name: "Project Administrator",
    role: "Admin",
    email: "admin@baharicbo.org",
    phone: "0712729004",
    status: "active",
  },
  {
    id: "U02",
    name: "Field Technician",
    role: "Technical Staff",
    email: "tech@baharicbo.org",
    phone: "0708872299",
    status: "active",
  },
  {
    id: "U03",
    name: "Seaweed Farmer",
    role: "Farmer",
    email: "farmer@example.com",
    phone: "0722334455",
    status: "active",
  },
]

export default function UsersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      {/* Header */}
      <section className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[var(--admin-primary-deep)]">
            User Management
          </h1>

          <p className="text-sm text-[var(--admin-muted)]">
            Manage administrators, technical staff, and farmers who can access the monitoring system.
          </p>
        </div>

        <Button className="rounded-2xl bg-[var(--admin-primary)] text-white flex items-center gap-2">
          <UserPlus size={16} />
          Add User
        </Button>
      </section>

      {/* Summary */}
      <section className="grid md:grid-cols-3 gap-6 mb-8">

        <SummaryCard
          title="Administrators"
          value="1"
          icon={<Shield size={18} />}
        />

        <SummaryCard
          title="Technical Staff"
          value="3"
          icon={<Wrench size={18} />}
        />

        <SummaryCard
          title="Farmers"
          value="12"
          icon={<Leaf size={18} />}
        />

      </section>

      {/* Users list */}
      <section className="space-y-4">
        {users.map(user => (
          <UserRow key={user.id} user={user} />
        ))}
      </section>

    </div>
  )
}

function SummaryCard({
  title,
  value,
  icon,
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

function UserRow({ user }: { user: User }) {

  const roleColor =
    user.role === "Admin"
      ? "bg-purple-100 text-purple-700"
      : user.role === "Technical Staff"
      ? "bg-blue-100 text-blue-700"
      : "bg-emerald-100 text-emerald-700"

  const statusColor =
    user.status === "active"
      ? "bg-emerald-100 text-emerald-700"
      : "bg-red-100 text-red-700"

  return (
    <Card className="rounded-3xl border-[var(--admin-border)] bg-white shadow-sm">
      <CardContent className="p-5 flex items-center justify-between">

        <div>
          <div className="font-semibold text-[var(--admin-primary-deep)]">
            {user.name}
          </div>

          <div className="text-xs text-[var(--admin-muted)]">
            {user.email} • {user.phone}
          </div>
        </div>

        <div className={`text-xs px-3 py-1 rounded-xl ${roleColor}`}>
          {user.role}
        </div>

        <div className={`text-xs px-3 py-1 rounded-xl ${statusColor}`}>
          {user.status}
        </div>

        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="rounded-xl">
            Edit
          </Button>

          <Button size="sm" className="rounded-xl bg-[var(--admin-primary)] text-white">
            Disable
          </Button>
        </div>

      </CardContent>
    </Card>
  )
}