"use client";
import React from "react";
import "./Layout.style.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className="Layout">{children}</div>;
}
