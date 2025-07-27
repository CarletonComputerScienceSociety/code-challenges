"use client";
import React from "react";
import Link from "next/link";
import "./Header.style.scss";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const showHeaderText = pathname === "/";

  return (
    <div className="Header">
      <div className="Header__container">
        <Link href="/">
          <img
            src="https://ccss.carleton.ca/images/ccss-logo-2022.png"
            alt="Vercel Logo"
          />
        </Link>

        {showHeaderText && (        
          <h3 className="Header__text">
          <i>Problem-Solving for Tech Interviews</i>
        </h3>
        )}
        
        <Link href="/past-challenges" >
          Past Challenges
        </Link>
      </div>
    </div>
  );
}
