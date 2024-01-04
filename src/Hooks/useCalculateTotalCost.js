
function useCalculateTotalCost(x) {
    const costPerHundredVotes = 1; // R1 per vote for every 100 votes
    const costPerVoteBelowHundred = 2; // R2 per vote for votes fewer than 100

    const hundredVotesMultiplier = Math.floor(x / 100); // Full 100-vote blocks
    const remainderVotes = x % 100; // Votes remaining after accounting for 100-vote blocks

    const totalCost =
        costPerHundredVotes * hundredVotesMultiplier * 100 +
        costPerVoteBelowHundred * remainderVotes;

    return totalCost;
}

export default useCalculateTotalCost;