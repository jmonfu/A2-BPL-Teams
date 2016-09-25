import { Component, OnInit } from '@angular/core';

import { TeamsService } from '../teams.service';
import { Players } from '../players';
import { Teams } from '../teams';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
    players: Players[] = [];
    teams: Teams[] = [];
    isLoading: boolean = false;
    error: boolean = true;

  constructor(private teamsService:TeamsService) {

   }

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers(){
    this.isLoading = true;
    this.players = this.teamsService.getPlayers();
  }
}
