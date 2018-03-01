import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamComponent } from './team.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamMemberComponent } from './team-member/team-member.component';


const teamRoutes: Routes = [
  { path: '', component: TeamComponent, children: [
      { path: '', component: TeamListComponent },
      { path: ':id', component: TeamMemberComponent },
    ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(teamRoutes)
  ],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
