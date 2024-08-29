"use client";
import React, { useState } from "react";
import { notFound } from "next/navigation";
import { questions } from "../../../data";

export default function Page({ params }: { params: { id: string } }) {
  const question = questions.find((question) => question.id === params.id);

  if (!question) return notFound();

  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [email, setEmail] = useState("");

  const MESSAGE_500 = "Failed to submit your answer. Please try again.";

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      if (!email.endsWith("@cmail.carleton.ca")) {
        throw new Error("Please use a cmail.carleton.ca email address.");
      }

      const body = {
        questionId: question.id,
        answer,
        email,
      };

      const response = await fetch(`/api/submissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      clearInputs();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setMessage("You got the correct answer 🎉");
    } catch (error) {
      // @ts-ignore
      setMessage(error.toString() || MESSAGE_500 || "");
    }
  };

  const clearInputs = () => {
    setAnswer("");
    setEmail("");
  };

  return (
    <>
      {message && <p>{message}</p>}
      <div>
        <h1>{question.title}</h1>
        <p>{question.content}</p>
      </div>
      <form onSubmit={submitData}>
        <input
          autoFocus
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="answer"
          type="text"
          value={answer}
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="@cmail.carleton.ca"
          type="text"
          value={email}
        />
        <input disabled={!answer || !email} type="submit" value="Submit" />
      </form>
    </>
  );
}
