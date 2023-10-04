import { Entity, Collection, createSystem } from 'axle';

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

  castVote(candidateName: string): boolean {
    const candidate = this.find((c) => c.name === candidateName);
    if (candidate) {
      candidate.votes++;
      return true; // Vote cast successfully
    }
    return false; // Candidate not found
  }

  countVotes(): Candidate[] {
    const sortedCandidates = this.sortByDesc((candidate) => candidate.votes);
    return sortedCandidates.toArray();
  }
}

// Example usage:
function runElection() {
  const ElectionSystemSystem = createSystem(ElectionSystem);
  const election = new ElectionSystemSystem();

  election.addCandidate("Candidate A");
  election.addCandidate("Candidate B");

  if (election.castVote("Candidate A")) {
    console.log("Vote for Candidate A cast successfully.");
  } else {
    console.log("Candidate A not found.");
  }

  const results = election.countVotes();
  console.log("Election Results:");
  results.forEach((candidate, index) => {
    console.log(`${index + 1}. ${candidate.name}: ${candidate.votes} votes`);
  });
}

runElection();
