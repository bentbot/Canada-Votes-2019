export class Candidate {
	id: string;
	name: string;
	count: number;
	percentage: any;
	image: any;
	data: any;
	color: string;
}

export class Statistics {
	poll: string;
	total: number;
	candidates: Candidate;
	projectedWinner: Candidate;
}