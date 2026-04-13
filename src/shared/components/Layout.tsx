import type { ReactNode } from "react";
import { CustomHeader } from "./CustomHeader";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="content">
      <CustomHeader title="JAZ-DevBoard" description="Tarea 1" />

      <main className="main">{children}</main>
    </div>
  );
};
