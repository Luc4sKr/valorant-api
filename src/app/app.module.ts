import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AgentsComponent } from './components/agents/agents.component';
import { AgentComponent } from './components/agents/agent/agent.component';
import { ArsenalComponent } from './components/arsenal/arsenal.component';
import { WeaponComponent } from './components/arsenal/weapon/weapon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AgentsComponent,
    AgentComponent,
    ArsenalComponent,
    WeaponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
