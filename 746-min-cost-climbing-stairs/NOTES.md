​This is a dynamic programming problem, which uses two important concepts: 1) recurrence relation and 2) tabulation (bottom-up DP). We are starting from the beginning of the array and iterating through determining the minimum cost to get to step [i]. The minimum cost to be at step [i] is the minimum cost to be at either step[i-1] or step[i-2] plus the cost to jump from either of those prior steps. 

This solution is essentially self-pruning, because we always determine the minimum cost to be where we are and we don't spend time calculating further suboptimal paths.
