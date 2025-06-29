"use client";
import React from "react";
import Link from "next/link";
import "./Header.style.scss";

export default function Header() {
  return (
    <div className="Header">
      <div className="Header__container">
        <Link href="/">
          <img
            src="https://ccss.carleton.ca/images/ccss-logo-2022.png"
            alt="Vercel Logo"
          />
        </Link>
        <h3 className="Header__text">
          <i>Problem-Solving for Tech Interviews</i>
        </h3>
      </div>
    </div>
  );
}
