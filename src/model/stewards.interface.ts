export interface Steward {
  name: string;
  image: string;
  handle_gitcoin: string;
  handle_forum: string;
  statement_post_id: number;
  steward_since: string;
  workstream: string;
  address: string;
  health: number;
  posts: number;
  votingweight: number;
  participation_snapshot: number;
  participation_tally: number;
}

export type SimpleType = Steward[];
