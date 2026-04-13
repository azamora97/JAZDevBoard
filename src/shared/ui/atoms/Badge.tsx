import type { TicketsPriority } from "@/features/tickets/interface";

interface PropsBadge {
  children: React.ReactNode;
  className?: string;
  priority: TicketsPriority;
}

const priorityStyle: Record<TicketsPriority, string> = {
  medium: "#f59e0b",
  high: "#ef4444",
  low: "#3b82f6",
};

export const Badge: React.FC<PropsBadge> = ({
  children,
  className = "",
  priority,
}) => {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        padding: "4px 8px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 500,
        backgroundColor: priorityStyle[priority],
        color: "white",
      }}
    >
      {children}
    </span>
  );
};
