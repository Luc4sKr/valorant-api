import { ActivatedRoute } from '@angular/router';
import { Agent } from './../../models/agent';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {

  public agentData$ = new Subject<Agent[] | undefined>();

  constructor(public service: ApiService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getAgents().subscribe(
      (resp) => {
        this.agentData$.next(resp.data);
      }
    );
  }
}
