import { notFound } from "next/navigation"
import { default as Layout } from "../../../../components/Page/Page";
import Question from "../../../../components/Question/Question";

// Question imports
import { questions as interview_problems} from "../../../../data/problem-solving-for-interviews"
import { questions as week_of_awesome_2024 } from "../../../../data/week-of-awesome-2024"

const challenges = {
  "problem-solving-for-interviews": {
    title: "Problem Solving for Interviews",
    questions: interview_problems,
  },
  "week-of-awesome-2024": {
    title: "Week of Awesome 2024",
    questions: week_of_awesome_2024
  }
}

export default function ChallengePage({ params }: { params: { id: string} }) {
  const challenge = challenges[params.id as keyof typeof challenges]
  
  if (!challenge) return notFound()

  return (
    <Layout>
      <Question>
        <div className="Question__title">
          <h1>{challenge.title}</h1>
          
          <div style={{ marginTop: "2rem" }}>
            
            {challenge.questions.map((question, index) => (
              <div key={index} style={{ marginBottom: "3rem" }}>
                <h4>{question.title}</h4>
                
                {question.videoLink && (
                  <iframe
                    width="960"
                    height="540"
                    src={question.videoLink}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
                
                <h5>Solution:</h5>
                
                <code
                  style={{
                    color: 'white',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: question.answer || "",
                  }}
                ></code>
                
                {index < challenge.questions.length - 1 && (
                  <hr style={{ margin: "2rem 0", opacity: 0.5 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </Question>
    </Layout>
  )
}