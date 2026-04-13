interface PropsButton {
  children: React.ReactNode;
  className: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button: React.FC<PropsButton> = ({
  children,
  className,
  type = "button",
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
