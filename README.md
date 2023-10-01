# Simple Election System in TypeScript

This is a simplified example of an election system implemented in TypeScript. It provides basic functionality for candidate registration, vote casting, and vote counting.

## Usage

1. **Create an Election System**

   ```typescript
      const election = new ElectionSystem();
         ```

         2. **Add Candidates**

            Candidates are registered with their names using the `addCandidate` method.

               ```typescript
                  election.addCandidate("Candidate A");
                     election.addCandidate("Candidate B");
                        ```

                        3. **Cast Votes**

                           Votes are cast for candidates by specifying their names using the `castVote` method.

                              ```typescript
                                 election.castVote("Candidate A");
                                    election.castVote("Candidate A");
                                       election.castVote("Candidate B");
                                          ```

                                          4. **Count Votes**

                                             To count the votes and determine the winners, use the `countVotes` method. It returns an array of candidates sorted by the number of votes in descending order.

                                                ```typescript
                                                   const results = election.countVotes();
                                                      ```

                                                      5. **Display Results**

                                                         You can display the election results using a loop:

                                                            ```typescript
                                                               console.log("Election Results:");
                                                                  results.forEach((candidate, index) => {
                                                                       console.log(`${index + 1}. ${candidate.name}: ${candidate.votes} votes`);
                                                                          });
                                                                             ```

                                                                             ## Example Output

                                                                             ```
                                                                             Election Results:
                                                                             1. Candidate A: 2 votes
                                                                             2. Candidate B: 1 votes
                                                                             ```

                                                                             ## Note

                                                                             - This is a basic example for demonstration purposes and does not cover all aspects of a real-world election system.
                                                                             - In a production system, you would need to consider security, user authentication, and data persistence.
                                                                             - Error handling and validation have been simplified for clarity and should be more robust in a real application.