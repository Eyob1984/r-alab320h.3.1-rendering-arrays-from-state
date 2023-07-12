import React from 'react'

export default function Score(props) {
  const personScore = props;

  return (
    <div>
      {personScore.scores.map((ele, index) => {
        return (
          <div key={index}>
            <p>Date: {ele.date}</p>
            <p>Score: {ele.score}</p>
          </div>
        )
      })}
    </div>
  )
}
