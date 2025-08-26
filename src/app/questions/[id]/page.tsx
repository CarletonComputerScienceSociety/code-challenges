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

const passwordInput = (
  password: string,
  setPassword: (password: string) => void,
) => {
  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <h4>Enter The Password</h4>
        <input
          className="Question__form__password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          value={password}
        />
      </div>
    </Layout>
  );
};

export default function Page({ params }: { params: { id: string } }) {
  const question = questions.find((question) => question.id === params.id);

  if (!question) return notFound();

  const today = new Date();
  if (question.startDate > today || question.endDate < today) return notFound();

  const [optionIndex, setOptionIndex] = useState(
    question.options ? Math.floor(Math.random() * question.options.length) : 0,
  );
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [answer, setAnswer] = useState("");
  const [email, setEmail] = useState("");

  const MESSAGE_500 = "Failed to submit your answer. Please try again.";

  const [password, setPassword] = useState("");
  if (question.password && password !== question.password) {
    return passwordInput(password, setPassword);
  }

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const body = {
        questionId: question.id,
        answer,
        email,
        optionId: question.options ? question.options[optionIndex].id : null,
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
        "🚨 " + (error.toString() || MESSAGE_500 || ""),
      );
    }
  };

  const clearInputs = () => {
    setError(false);
    setAnswer("");
    setEmail("");
  };

  // Difficulty indicator component
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "#28a745";
      case "Medium":
        return "#ffc107";
      case "Hard":
        return "#dc3545";
      default:
        return "#6c757d";
    }
  };

  const getDifficultyDots = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return 1;
      case "Medium":
        return 2;
      case "Hard":
        return 3;
      default:
        return 1;
    }
  };

  return (
    <Layout styleOverride={question.style}>
      <Question>
        <div className="Question__title">
          <h1>{question.title}</h1>

          {/* Difficulty Indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1rem",
              padding: "0.5rem 1rem",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              border: `2px solid ${getDifficultyColor(question.difficulty)}`,
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                color: getDifficultyColor(question.difficulty),
                fontSize: "1rem",
              }}
            >
              Difficulty: {question.difficulty}
            </span>
            <div style={{ display: "flex", gap: "0.2rem" }}>
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor:
                      dot <= getDifficultyDots(question.difficulty)
                        ? getDifficultyColor(question.difficulty)
                        : "#e9ecef",
                  }}
                />
              ))}
            </div>
          </div>

          {question.pdfPath && (
            <div className="pdflink">
              <a href={`/${question.pdfPath}`} download>
                Download Problem Specifications (PDF)
              </a>
            </div>
          )}

          {/* <iframe
            width="960"
            height="540"
            src={question.videoLink}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> */}

          {/* Question content should appear here, right after the title */}
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <h2 style={{ marginBottom: "1rem", color: "#333" }}>Question</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: question.options
                  ? question.options[optionIndex].content || ""
                  : question.content || "",
              }}
              style={{
                lineHeight: "1.6",
                fontSize: "1.1rem",
                backgroundColor: "transparent",
                color: "black",
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
              className="question-content"
            />
          </div>
          <style jsx>{`
            .question-content :global(code) {
              color: white !important;
              background-color: #333 !important;
              padding: 0.2rem 0.4rem !important;
              border-radius: 4px !important;
              font-family: "Courier New", monospace !important;
            }
          `}</style>

          <h3 style={{ marginBottom: "1rem" }}> Enter Your Input Below: </h3>
        </div>

        <form onSubmit={submitData} className="Question__form">
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              Enter Your Carleton Email:
            </label>
            <input
              id="email"
              className="Question__form__email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yourname@cmail.carleton.ca"
              type="email"
              value={email}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="answer"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              Enter Your Answer:
            </label>
            <textarea
              id="answer"
              className="Question__form__answer"
              autoFocus
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Please enter your answer here."
              value={answer}
            />
          </div>

          <input
            className="Question__form__button"
            disabled={!answer || !email}
            type="submit"
            value="Submit"
          />
        </form>

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
      </Question>
    </Layout>
  );
}
