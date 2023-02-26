import { SingleAgentReturn } from './../models/single-agent-return';
import { AgentsReturn } from './../models/agents-return';
import { Agent } from './../models/agent';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL_API: string = "https://valorant-api.com/v1";
  private URL_API_AGENTS = `${this.URL_API}/agents/?isPlayableCharacter=true&language=pt-BR`;

  constructor(public http: HttpClient) { }

  getAgents() {
    return this.http.get<AgentsReturn>(this.URL_API_AGENTS);
  }

  getAgentByUuid(Uuid: string) {
    return this.http.get<SingleAgentReturn>(`${this.URL_API}/agents/${Uuid}?language=pt-BR`);
  }
}
