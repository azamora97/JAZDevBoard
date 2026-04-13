import type { CardStyle } from "@/features/tickets/interface";

interface PropsCard {
  className: string;
  cardStyle: CardStyle;
  children: React.ReactNode;
}

const CardColors: Record<CardStyle, string> = {
  default: "#e8e8e8",
  primary: "#3a547e",
  TODO: "#a7a7a7",
  "IN-PROGRESS": "#0a3f8f",
  DONE: "#22c55e",
};

export const Card: React.FC<PropsCard> = ({
  children,
  className,
  cardStyle,
}) => {
  return (
    <div
      className={className}
      style={{
        borderLeft: `5px solid ${CardColors[cardStyle ?? CardColors.default]}`,
      }}
    >
      {children}
    </div>
  );
};
