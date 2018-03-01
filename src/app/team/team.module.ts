import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamRoutingModule } from './team-routing.module';

import { TeamComponent } from './team.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamMemberComponent } from './team-member/team-member.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    TeamRoutingModule
  ],
  declarations: [
    TeamComponent,
    TeamListComponent,
    TeamMemberComponent
  ]
})
export class TeamModule {}
