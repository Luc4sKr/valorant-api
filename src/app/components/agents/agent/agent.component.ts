import { SingleAgentReturn } from './../../../models/single-agent-return';
import { AgentsReturn } from './../../../models/agents-return';
import { ApiService } from './../../../service/api.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  @Input() singleAgent: SingleAgentReturn = new SingleAgentReturn({});


  constructor(public service: ApiService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }
}
