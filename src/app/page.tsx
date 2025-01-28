import Card from "../components/Card/Card";
import Page from "../components/Page/Page";
import { questions } from "../data";
import { Question } from "../data";

export default async function Home() {
  const today = new Date();
  const availableQuestions = questions.filter(
    (question: Question) =>
      question.startDate <= today && question.endDate >= today
  );
  return (
    <Page>
      <div style={{ marginTop: "5rem" }}></div>
      <div className="Card__list">
        {questions.map((question: Question, index: number) => (
          <div key={question.id}>
            <Card
              number={index + 1}
              question={question}
              link={`/questions/${question.id}`}
            />
          </div>
        ))}
      </div>
    </Page>
  );
}
