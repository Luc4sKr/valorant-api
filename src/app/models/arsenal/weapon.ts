export class Weapon {
  uuid?: string;
  displayName?: string;
  category?: string;
  defaultSkinUuid?: string;
  displayIcon?: string;
  killStreamIcon?: string;
  assetPath?: string;
  weaponStats?: WeaponStats;
  skins?: Skinks;

  constructor(obj: Partial<Weapon>) {
    Object.assign(this, obj)
  }
}


class WeaponStats {
  fireRate?: number;
  magazineSize?: number;
  runSpeedMultiplier?: number;
  equipTimeSeconds?: number;
  reloadTimeSeconds?: number;
  firstBulletAccuracy?: number;
  shotgunPelletCount?: number;
  wallPenetration?: string;
  feature?: string;
  fireMode?: string;
  altFireType?: string;

  constructor(obj: Partial<WeaponStats>) {
    Object.assign(this, obj)
  }
}

class Skinks {
  uuid?: string;
  displayName?: string;
  themeUuid?: string;
  contentTierUuid?: string;
  displayIcon?: string;
  wallpaper?: string;
  assetPath?: string;

  constructor(obj: Partial<Skinks>) {
    Object.assign(this, obj)
  }
}
