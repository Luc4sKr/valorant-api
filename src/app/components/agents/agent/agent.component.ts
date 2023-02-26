import { SingleAgentReturn } from './../../../models/single-agent-return';
import { AgentsReturn } from './../../../models/agents-return';
import { ApiService } from './../../../service/api.service';
import { Agent } from './../../../models/agent';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {

  public agent: Agent = new Agent({});
  public singleAgent: SingleAgentReturn = new SingleAgentReturn({});

  constructor(public service: ApiService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
    let paramUuid = this.route.snapshot.paramMap.get("uuid");

    if (paramUuid) {
      this.service.getAgentByUuid(paramUuid).subscribe(
        (resp) => {
          this.singleAgent = resp;
          console.log(resp)
        }
      );
    }
  }
}
