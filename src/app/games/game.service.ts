import { Injectable} from '@angular/core';
import {Game} from './game.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class GameService {
  gamesChanged = new Subject<Game[]>();

  private games: Game[] = [
    new Game('GTA V', 'Best from Rockstar',
      'https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V.jpg',
      '2013', '6.0'),
    new Game('F1 2017', 'Best Formula 1 game ever!',
      'https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcDwJ076BN31F3gmwJvE8wCLRsY5TY9cvuM_EC8JMMyngkQCGiG_sMCMoCf8tyrJE7HCuPOy.jX8qG57SW2JOF5GP4OjrjuL9l8ncjede.jUgtlO4eSnnl.bd5ZzdVUO9brzmej64Ql1M_9pbg2OpWePkdlURyfVS0fmXCN71pqgY-&w=200&h=300&format=jpg',
      '2017', '9.0'),
    new Game('Rocket League', 'Racing + Football',
      'https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc.6R1V9uvfCkXj7qkEQaoGNbvPwT7qY_Y9Yu5F7Vj0I9ecoYMpmlz3ssGwIreloNqUxIi1woMzp7qv9xzf11Kg.2swJTMUl3w9h46ejJ3uxCCu5pK6jiYl2Hfq1BBSb.qBVUB7bbIO0ZFn8t1DeSoICTOpt5rvbkid1_G8j1WMqM-&w=200&h=300&format=jpg',
      '2015', '9.0')
  ] ;
  getGames() {
    return this.games.slice();
  }
  getGame(index: number) {
    return this.games[index];
  }
  addGame(game: Game) {
    this.games.push(game);
    this.gamesChanged.next(this.games.slice());
  }
  updateGame(index: number, newGame: Game) {
    this.games[index] = newGame;
    this.gamesChanged.next(this.games.slice());
  }
  deleteGame(index: number) {
    this.games.splice(index, 1);
    this.gamesChanged.next(this.games.slice());
  }

  setGames(games: Game[]) {
    this.games = games;
    this.gamesChanged.next(this.games.slice());
  }

  constructor() { }

}
