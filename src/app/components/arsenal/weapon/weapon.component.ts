import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from 'src/app/models/arsenal/weapon';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent implements OnInit {

  @Input() weapon: Weapon = new Weapon({});

  display = "";

  constructor() { }

  ngOnInit(): void {

  }

  containerEnter(): void {
    this.display = "flex";
  }

  containerLeave(): void {
    this.display = "none";
  }
}
