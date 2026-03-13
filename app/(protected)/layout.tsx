import AdminSidebar from "@/components/app-shell/admin-sidebar";
import AdminHeader from "@/components/app-shell/admin-header";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main */}
      <div className="flex flex-col flex-1">

        <AdminHeader />

        <main className="p-6">
          {children}
        </main>

      </div>
    </div>
  );
}