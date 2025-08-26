import Card from "../components/Card/Card";
import Page from "../components/Page/Page";
import { questions } from "../data";
import { Question } from "../data";

export default async function Home() {
  const today = new Date();
  const availableQuestions = questions.filter(
    (question: Question) =>
      question.startDate <= today && question.endDate >= today,
  );

  // Split questions into beginner (1-7) and advanced (8-14)
  const beginnerQuestions = questions.slice(0, 7);
  const advancedQuestions = questions.slice(7, 14);

  return (
    <Page>
      <div style={{ marginTop: "3rem" }}></div>

      {/* Beginner Section */}
      <div style={{ marginBottom: "4rem" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#28a745",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          First Year Students (Easy Questions)
        </h2>
        <div className="Card__list">
          {beginnerQuestions.map((question: Question, index: number) => (
            <div key={question.id}>
              <Card
                number={index + 1}
                question={question}
                link={`/questions/${question.id}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Section */}
      <div>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#dc3545",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Third/Fourth Year Students (Medium/Hard Questions)
        </h2>
        <div className="Card__list">
          {advancedQuestions.map((question: Question, index: number) => (
            <div key={question.id}>
              <Card
                number={index + 1}
                question={question}
                link={`/questions/${question.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}
