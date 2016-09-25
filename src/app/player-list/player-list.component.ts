import { Component, OnInit, OnChanges, Input, trigger, state, animate, transition, style } from '@angular/core';

import { TeamsService } from '../teams.service';
import { Player } from '../player';
import { Team } from '../team';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
})
export class PlayerListComponent implements OnInit {
    players: Player[] = [];
    teams: Team[] = [];
    isLoading: boolean = false;
    error: boolean = true;
    selectedPlayer: Player;
    @Input() state : string = "inactive";

  constructor(private teamsService:TeamsService) {

   }

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers(){
    this.isLoading = true;
    this.players = this.teamsService.getPlayers();
  }

  onSelect(player:Player){
    this.selectedPlayer=player;
  };

}
