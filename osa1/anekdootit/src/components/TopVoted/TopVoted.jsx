import React from 'react'

const TopVoted = ({ topVote, topVoteCount }) => {
    return (
        <div>
        <p>{topVote}</p>
        <p>{topVoteCount + " Votes"}</p>
        </div>
    )
}

export default TopVoted
