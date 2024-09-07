"use client";
import React from "react";
import Link from "next/link";
import "./Footer.style.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="Footer">
      <a href="https://ccss.carleton.ca/">
        © {currentYear} Carleton Computer Science Society
      </a>
    </div>
  );
}
