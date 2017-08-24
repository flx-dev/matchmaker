import { Component, OnInit } from '@angular/core';

import { Player } from '../player';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  players: Player[];

  constructor() { }

  ngOnInit() {
    this.players = JSON.parse(localStorage.getItem('players'));
    if(!this.players) {
      this.players = [];
    }
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
