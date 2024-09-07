"use client";
import React from "react";
import "./Question.style.scss";

interface QuestionProps {
  children: React.ReactNode;
}
export default function Question({ children }: QuestionProps) {
  return <div className="Question">{children}</div>;
}
