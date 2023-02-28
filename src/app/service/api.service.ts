import { WeaponReturn } from './../models/arsenal/weapon-return';
import { SingleAgentReturn } from '../models/agent/single-agent-return';
import { AgentsReturn } from '../models/agent/agents-return';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL_API: string = "https://valorant-api.com/v1";
  private URL_API_AGENTS = `${this.URL_API}/agents/?isPlayableCharacter=true&language=pt-BR`;
  private URL_API_WEAPONS = `${this.URL_API}/weapons?language=pt-BR`;

  constructor(public http: HttpClient) { }

  getAgents() {
    return this.http.get<AgentsReturn>(this.URL_API_AGENTS);
  }

  getAgentByUuid(Uuid: string) {
    return this.http.get<SingleAgentReturn>(`${this.URL_API}/agents/${Uuid}?language=pt-BR`);
  }

  getWeapons() {
    return this.http.get<WeaponReturn>(this.URL_API_WEAPONS);
  }
}
