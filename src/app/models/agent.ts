export class Agent {
  uuid?: string;
  displayName?: string;
  description?: string;
  developerName?: string
  displayIcon?: string;
  bustPortrait?: string;
  background?: string;
  role?: Role;

  constructor(obj: Partial<Agent>) {
    Object.assign(this, obj);
  }

  /*constructor(uuid: string,
              displayName: string,
              description: string,
              developerName: string,
              displayIcon: string,
              bustPortrait: string,
              background: string,
              role: Role) { }*/
}

class Role {
  uuid?: string;
  displayName?: string;
  description?: string;
  displayIcon?: string;

  constructor(obj: Partial<Role>) {
    Object.assign(this, obj);
  }

  /*constructor(uuid: string,
              displayName: string,
              description: string,
              displayIcon: string) { }*/
}
