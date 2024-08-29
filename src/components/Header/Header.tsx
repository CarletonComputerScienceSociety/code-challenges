"use client";
import React from "react";
import Link from "next/link";
import "./Header.style.scss";

export default function Header() {
  return (
    <div className="Header">
      <Link href="/">
        <img
          src="https://ccss.carleton.ca/images/ccss-logo-2022.png"
          alt="Vercel Logo"
        />
      </Link>
    </div>
  );
}
