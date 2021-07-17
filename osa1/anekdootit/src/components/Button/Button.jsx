import React from 'react'

const Button = ({ randomAnecdote, setSelected, anecdotes, updateVotes }) => {
    return (
        <div>
        <button onClick={() => updateVotes()}>Vote</button>
        <button onClick={() => setSelected(anecdotes[randomAnecdote()])}>Next anecdote</button>
            
        </div>
    )
}

export default Button
