import { Agent } from './agent';

export class SingleAgentReturn {
  status?: number;
  data: Agent = new Agent({});

  constructor(obj: Partial<SingleAgentReturn>) {
    Object.assign(this, obj);
  }
}
