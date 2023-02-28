import { ArsenalComponent } from './components/arsenal/arsenal.component';
import { AgentsComponent } from './components/agents/agents.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo:"/home", pathMatch:"full"},

  { path: "agents", component: AgentsComponent},
  { path: "agents/:uuid", component: AgentsComponent},

  {path: "arsenal", component: ArsenalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
