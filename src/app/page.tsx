import Card from "../components/Card/Card";
import { questions } from "../data";
import { Question } from "../data";

export default async function Home() {
  const today = new Date();
  const availableQuestions = questions.filter(
    (question: Question) =>
      question.startDate <= today && question.endDate >= today,
  );
  return (
    <>
      <h1>Available Questions</h1>
      {availableQuestions.map((question: Question) => (
        <div key={question.id}>
          <Card
            title={question.title}
            content={question.content}
            link={`/questions/${question.id}`}
          />
        </div>
      ))}

      {availableQuestions.length === 0 && (
        <div>No available questions at the moment.</div>
      )}
    </>
  );
}
