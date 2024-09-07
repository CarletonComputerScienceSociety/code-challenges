import React from "react";
import "./Page.style.scss";

interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: PageProps) {
  return <div className="Page">{children}</div>;
}
