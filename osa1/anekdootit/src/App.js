import React, { useState, useEffect } from "react";

import Anecdote from "./components/Anecdote/Anecdote";
import Button from "./components/Button/Button";
import TopVoted from "./components/TopVoted/TopVoted";


function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const randomAnecdote = () => Math.floor(Math.random() * (anecdotes.length));
   
  const [selected, setSelected] = useState(anecdotes[randomAnecdote()])
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [topVote, setTopVote] = useState("No votes yet")
  const [topVoteCount, setTopVoteCount] = useState(0)
  
  const updateVotes = () => {
    const newVotes = [...votes];
    newVotes[anecdotes.indexOf(selected)] += 1;
    setVotes(newVotes);
  }

  useEffect(() => {
    const top = votes.indexOf(Math.max(...votes));
    setTopVote(anecdotes[top]);
    setTopVoteCount(votes[top]);
    }, [votes])
  
  return (
  <div className="App">
    <h1>Anecdote of the day</h1>
      <Anecdote selected={selected} />
      <Button randomAnecdote={randomAnecdote} setSelected={setSelected} anecdotes={anecdotes} updateVotes={updateVotes} />
    <h2>Anecdote with most votes</h2>
    <TopVoted topVote={topVote} topVoteCount={topVoteCount} />
  </div>
  );
}

export default App;
