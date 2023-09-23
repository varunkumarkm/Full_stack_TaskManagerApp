import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { AboutComponent } from 'src/app/admin/about/about.component';
import { MyProfileComponent } from 'src/app/admin/my-profile/my-profile.component';
import { DashboardService } from '../dashboard.service';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent
  ],
  imports: [ CommonModule, FormsModule],
  exports: [ DashboardComponent, AboutComponent, MyProfileComponent, ProjectsComponent],
  providers: [DashboardService]
})
export class AdminModule { }
