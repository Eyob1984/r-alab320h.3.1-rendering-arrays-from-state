import React from 'react'

export default function Learner(props) {
  return (
    <div style={props.style}>
      <p> Learner Name: {props.name}</p>
      <p> Learner Bio: {props.bio}</p>
    </div>
  )
}
