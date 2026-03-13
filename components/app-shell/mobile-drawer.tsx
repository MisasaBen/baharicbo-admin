"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import AdminSidebar from "./admin-sidebar";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="w-64 h-full bg-emerald-900">
            <div className="p-4 flex justify-end">
              <button onClick={() => setOpen(false)}>
                <X className="text-white" />
              </button>
            </div>

            <AdminSidebar />
          </div>
        </div>
      )}
    </>
  );
}