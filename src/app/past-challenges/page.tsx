"use client"

import Link from "next/link"
import { Trophy, Calendar, Eye } from "lucide-react"
import "./page.css"

const challenges = [
    {
        id: "problem-solving-for-interviews",
        title: "Problem Solving for Interviews",
        description: "Try your hand at some common types of problems asked in technical interviews to strengthen your skills.",
        date: "01/01/2025",
    },
    {
        id: "week-of-awesome-2024",
        title: "Week of Awesome 2024",
        description: "Sharpen your problem-solving skills in prepartion for the upcoming school year with a 7-day coding contest.",
        date: "09/07/2024",
    }
]

export default function PastChallenges() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-title">
          <Trophy />
          <h1>Past Challenges</h1>
        </div>
        <p className="header-description">
          Review previous coding challenges and explore solutions to improve your skills!
        </p>
      </div>

      <div className="challenges-grid">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="challenge-card">
            <div className="card-header">
              <Link href={`/challenges/${challenge.id}`} className="card-title">
                {challenge.title}
              </Link>
              <p className="card-description">{challenge.description}</p>
            </div>
            <div className="card-content">
              <div className="date-info">
                <Calendar />
                <span>{new Date(challenge.date).toLocaleDateString()}</span>
              </div>

              <hr className="separator" />

              <Link href={`/challenges/${challenge.id}/solutions`} className="solution-button" style={{ textDecoration: "none" }}>
                <Eye />
                View Solutions
              </Link>
            </div>
          </div>
        ))}
      </div>

      {challenges.length === 0 && (
        <div className="empty-state">
          <h3>No challenges found</h3>
          <p>There are no challenges to display.</p>
        </div>
      )}
    </div>
  )
}