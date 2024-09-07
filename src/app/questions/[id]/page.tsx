"use client";
import React, { useState } from "react";
import { questions } from "../../../data";
import { default as Layout } from "../../../components/Page/Page";
import Question from "../../../components/Question/Question";

const notFound = () => {
  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <h2>404: Question not found.</h2>
      </div>
    </Layout>
  );
};

export default function Page({ params }: { params: { id: string } }) {
  const question = questions.find((question) => question.id === params.id);

  if (!question) return notFound();

  const today = new Date();
  if (question.startDate > today || question.endDate < today) return notFound();

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [answer, setAnswer] = useState("");
  const [email, setEmail] = useState("");

  const MESSAGE_500 = "Failed to submit your answer. Please try again.";

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
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

      setError(false);
      setMessage("🎉 You got the correct answer");
    } catch (error) {
      setError(true);
      setMessage(
        // @ts-ignore
        "🚨" + (error.toString() || MESSAGE_500 || ""),
      );
    }
  };

  const clearInputs = () => {
    setError(false);
    setAnswer("");
    setEmail("");
  };

  return (
    <Layout>
      <Question>
        <div className="Question__banner">
          {message && (
            <div
              className={`Question__message ${
                error
                  ? "Question__message--error"
                  : "Question__message--success"
              }`}
            >
              {<p>{message}</p>}
            </div>
          )}
        </div>
        <div className="Question__title">
          <h1>{question.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: question.content }}></div>
        </div>
        <div style={{ marginTop: "2rem" }}></div>
        <form onSubmit={submitData} className="Question__form">
          <input
            className="Question__form__email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="@cmail.carleton.ca"
            type="text"
            value={email}
          />
          <textarea
            className="Question__form__answer"
            autoFocus
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Please enter your answer here."
            value={answer}
          />
          <input
            className="Question__form__button"
            disabled={!answer || !email}
            type="submit"
            value="Submit"
          />
        </form>
      </Question>
    </Layout>
  );
}
