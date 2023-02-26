import { Agent } from './agent';

export class AgentsReturn {
  status?: number;
  data: Agent[] = [];

  constructor(obj: Partial<AgentsReturn>) {
    Object.assign(this, obj);
  }
}
