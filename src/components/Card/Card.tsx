import React from "react";
import Link from "next/link";
import "./Card.style.scss";
import { Question } from "../../data";

interface CardProps {
  link: string;
  question: Question;
  number: number;
}

export default function Card({ link, question, number }: CardProps) {
  const today = new Date();
  const isAvailable = question.startDate <= today && question.endDate >= today;

  return (
    <div className="Card__outer">
      <Link
        href={link}
        aria-disabled={!isAvailable}
        className={`Card__link ${isAvailable ? "Card__link--available" : "Card__link--disabled"}`}
      >
        <div
          className={`Card ${isAvailable ? "Card--available" : "Card--disabled"}`}
        >
          <div>Day {number}</div>
        </div>
      </Link>
    </div>
  );
}
