import { Entity, Collection, System, createSystem } from 'axle';

class Candidate extends Entity {
  name: string;
  votes: number;

  constructor(name: string) {
    super();
    this.name = name;
    this.votes = 0;
  }
}

class ElectionSystem extends Collection<Candidate> {
  addCandidate(candidateName: string) {
    const candidate = new Candidate(candidateName);
    this.add(candidate);
  }

  castVote(candidateName: string) {
    const candidate = this.find((c) => c.name === candidateName);
    if (candidate) {
      candidate.votes++;
      return true; // Vote cast successfully
    }
    return false; // Candidate not found
  }

  countVotes() {
    const sortedCandidates = this.sortByDesc((candidate) => candidate.votes);
    return sortedCandidates.toArray();
  }
}

// Example usage:
const ElectionSystemSystem = createSystem(ElectionSystem);
const election = new ElectionSystemSystem();

election.addCandidate("Candidate A");
election.addCandidate("Candidate B");

election.castVote("Candidate A");
election.castVote("Candidate A");
election.castVote("Candidate B");

const results = election.countVotes();
console.log("Election Results:");
results.forEach((candidate, index) => {
  console.log(`${index + 1}. ${candidate.name}: ${candidate.votes} votes`);
});
