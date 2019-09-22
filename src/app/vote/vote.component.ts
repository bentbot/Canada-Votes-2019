import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Socket } from 'ng-socket-io';
import { CookieService } from 'ng2-cookies';
import { Candidate, Statistics } from './candidate';

@Component({
  selector: 'vote',
  providers: [CookieService],
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent implements OnInit {

  @Input() show_statistics = false;

  constructor(private socket: Socket,
  			      private cookie: CookieService) { 
	}

  // Global Vars
	key: string;
	
	loaded: boolean;
  voted: string;

  // Ballots
	federal_ballot =   new Ballot();
  municipal_ballot = new Ballot();

  // Candidates  	
  federal_candidates:   Candidate;
  municipal_candidates: Candidate;

  // Statistics
  statistics:           Statistics;
  federal_statistics:   Statistics;
  municipal_statistics: Statistics;



  // * Voting * //
  vote(ballot) {
  	if ( !this.voted ) {
      this.socket.emit("vote", ballot);
      this.socket.fromEvent<any>("voted")
       .subscribe((result) => {
          this.cookie.set('voted', ballot.candidate);
          ballot.voted = true;
          this.voted = result;
          this.get_statistics(true);
      });

  	}
  }

  select_vote(candidate, federal) {
    if ( federal ) {
      this.federal_ballot.name = candidate.name; 
      this.federal_ballot.candidate = candidate.id; 
      this.federal_ballot.poll = 'federal';
    } else {
      this.municipal_ballot.name = candidate.name; 
      this.municipal_ballot.candidate = candidate.id; 
      this.municipal_ballot.poll = 'municipal';
    }
  }


  get_candidates() {
  	this.socket.emit("candidates", true);
      return this.socket
          .fromEvent<any>("candidates")
         .subscribe((result) => { 
           this.loaded = true;
           this.federal_candidates = result['federal'];
           this.municipal_candidates = result['municipal'];
         });
  }


  // * Results * //
  get_statistics(s=false) {
    this.socket.emit("statistics", 'federal');
    this.socket.fromEvent<any>("statistics")
       .subscribe((result) => {
         this.federal_statistics = result;
       });

    // this.socket.emit("statistics", 'municipal');
    // this.socket.fromEvent<any>("statistics")
    //    .subscribe((result) => {
    //      this.municipal_statistics = result;
    //    });
    
    this.show_statistics = s;

  }

  kb(e, c, f) { 
    if ( e.keyCode == 13 || e.keyCode == 32 ) {
      this.select_vote(c, f); 
    }
  }

	ngOnInit() {
    this.get_candidates();
		this.voted = (this.cookie.get('voted') != '') ?this.cookie.get('voted') : null;
		if (window.location.hash == "#statistics" || this.voted) this.get_statistics(true);
	}

}

export class Ballot {
	constructor(
		public poll?: string,
    public name?: string,
    public candidate?: string,
    public voted?: boolean,
		public instance?: string,
    public color?: string,
    public key?: string
	) { }
}