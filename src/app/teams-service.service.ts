import { Injectable } from '@angular/core';

  var _players = [
      {id:1, teamId:1, name:"David", surname:"De Gea", thumb:"../Images/DeGea_Thumb.jpg", image:"../Images/DeGea_Full.jpg", dob:"01/01/2000", birthplace:"Madrid",
             position:"Goalkeeper", appearances:40, goals:0},
      {id:2, teamId:1, name:"Zlatan", surname:"Ibrahimovic", thumb:"../Images/Ibra_Thumb.jpg", image:"../Images/Ibra_Full.jpg", dob:"01/01/2000", birthplace:"Malmo",
             position:"Forward", appearances:40, goals:0},
      {id:3, teamId:1, name:"Paul", surname:"Pogba", thumb:"../Images/Pogba_Thumb.jpg", image:"../Images/Pogba_Full.jpg", dob:"01/01/2000", birthplace:"Paris",
             position:"Midfielder", appearances:40, goals:0},
      {id:4, teamId:1, name:"Wayne", surname:"Rooney", thumb:"../Images/Rooney_Thumb.jpg", image:"../Images/Rooney_Full.jpg", dob:"01/01/2000", birthplace:"Liverpool",
             position:"Forward", appearances:40, goals:0},
      {id:5, teamId:1, name:"Marcus", surname:"Rashford", thumb:"../Images/Rashford_Thumb.jpg", image:"../Images/Rashford_Full.jpg", dob:"01/01/2000", birthplace:"Manchester",
             position:"Forward", appearances:40, goals:0}
  ];

  var _teams = [
    {id:1, name:"Manchester United" },
    {id:2, name:"Manchester City" },
    {id:3, name:"Arsenal" }
  ];


@Injectable()
export class TeamsServiceService {
  private teams;
  private players;

  constructor() { 
    this.players = _players;
    this.teams = _teams;
  }

  getTeams(){
    return this.teams;
  }

  getPlayers(){
    return this.players;
  }

}




