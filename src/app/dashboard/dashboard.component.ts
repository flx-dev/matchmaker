import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { Team } from '../team';
import { Match } from '../match';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  players: Player[];
  matches: Match[] = [];
  latestMatch: Match;

  constructor() { }

  ngOnInit() {
    this.players = JSON.parse(localStorage.getItem('players'));
    if(!this.players) {
      this.players = [];
    }
  }

  makeMatch(): void {
    let ranking = Array(this.players.length).fill(Math.random());
    let team1: Team = {players: []};
    let team2: Team = {players: []};
    let alt: Boolean = false;
    
    for (const player of this.players) {
      player.rank = Math.random();
    }

    this.players.sort((a, b) => a.rank - b.rank);
    for(const player of this.players) {
      if (alt == false) team1.players.push(player)
      else team2.players.push(player);
      alt = !alt;
    }
    this.latestMatch = {teams: [team1, team2]};
    this.matches.push(this.latestMatch);
    console.log(this.matches);
  }

  deletePlayer(index: number): void {
    this.players.splice(index, 1);
    localStorage.setItem('players', JSON.stringify(this.players));
  }

  addPlayer(name: String): void {
    this.players.push({name});
    localStorage.setItem('players', JSON.stringify(this.players));
  }
}
