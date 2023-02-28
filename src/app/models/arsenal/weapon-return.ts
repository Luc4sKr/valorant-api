import { Weapon } from './weapon';

export class WeaponReturn {
  status?: number;
  data: Weapon[] = [];

  constructor(obj: Partial<WeaponReturn>) {
    Object.assign(this, obj)
  }
}
