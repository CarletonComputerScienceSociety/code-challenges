import React from "react";
import Link from "next/link";
import "./Card.style.scss";

interface CardProps {
  link: string;
  title: string;
  content: string;
}

export default function Card({ link, title, content }: CardProps) {
  return (
    <div className="Card">
      <Link href={link}>
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </Link>
    </div>
  );
}
