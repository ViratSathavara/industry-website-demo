import React from "react";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  FileCheck,
  Send,
  XCircle,
  Wrench,
  Truck,
  RotateCcw
} from "lucide-react";

interface StatusBadgeProps {
  status: string;
  type?: "lead" | "rfq" | "quote" | "order" | "appointment" | "generic";
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  let colorStyles = "bg-stone-100 text-stone-700 border-stone-200";
  let Icon = Clock;

  const normalized = status.toLowerCase();

  if (["won", "accepted", "delivered", "confirmed", "active", "completed"].includes(normalized)) {
    colorStyles = "bg-emerald-50 text-emerald-800 border-emerald-200";
    Icon = CheckCircle2;
  } else if (["production", "reviewing", "in progress", "qualified", "sent"].includes(normalized)) {
    colorStyles = "bg-amber-50 text-amber-800 border-amber-200";
    Icon = Wrench;
  } else if (["dispatched", "ready", "quoted", "contacted"].includes(normalized)) {
    colorStyles = "bg-blue-50 text-blue-800 border-blue-200";
    Icon = Truck;
  } else if (["draft", "new", "requested", "submitted"].includes(normalized)) {
    colorStyles = "bg-stone-100 text-stone-700 border-stone-300";
    Icon = FileCheck;
  } else if (["lost", "declined", "cancelled", "expired"].includes(normalized)) {
    colorStyles = "bg-rose-50 text-rose-800 border-rose-200";
    Icon = XCircle;
  } else if (["changes requested", "rescheduled", "need information"].includes(normalized)) {
    colorStyles = "bg-orange-50 text-orange-800 border-orange-200";
    Icon = RotateCcw;
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border tracking-wide",
        colorStyles,
        className
      )}
    >
      <Icon className="w-3.5 h-3.5 shrink-0" />
      <span>{status}</span>
    </span>
  );
};
