import React from "react";
import "./Page.style.scss";

interface PageProps {
  children: React.ReactNode;
  styleOverride?: string;
}

export default function Page({ children, styleOverride }: PageProps) {
  return (
    <div className={`${styleOverride ? styleOverride : ""}`}>
      <div className="Page">{children}</div>
    </div>
  );
}
