import React from 'react'
import { Badge } from "@/components/ui/badge"

// Mapping status to Tailwind CSS classes
const statusStyles = {
  pending: {
    background: "bg-pending",
    foreground: "text-pending-foreground",
  },
  proses: {
    background: "bg-proses",
    foreground: "text-proses-foreground",
  },
  selesai: {
    background: "bg-selesai",
    foreground: "text-selesai-foreground",
  },
};

export default function StatusBadge({ status }) {
  // Convert status to lowercase and get corresponding styles
  const statusLowerCase = status.toLowerCase();
  const { background, foreground } = statusStyles[statusLowerCase] || {};

  return (
    <Badge className={`${background} ${foreground}`}>
      {status}
    </Badge>
  );
}
