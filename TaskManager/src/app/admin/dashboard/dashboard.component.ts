import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation:string = '';
  Username:string = '';
  NoOfTeamMembers:number = 0;
  TotalCostOfAllProjects:number = 0;
  PendingTasks:number = 0;
  UpComingProjects:number = 0;
  ProjectCost:number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds:number = 0;

  Clients:string[] = [];
  Projects:string[] = [];
  Years:number[] = [];
  TeamMembersSummary:any = [];
  TeamMembers:any = [];

  constructor(private dashboardService: DashboardService){ }

  ngOnInit(): void {
    this.Designation = 'Team Leader';
    this.Username = 'John Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 2164784;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 53467;
    
    this.Clients = [
      "ABC Infotech Ltd.","DEF Software Solutions","GHI Industries"
    ];

    this.Projects = [
      "Project A", "Project B", "Project c", "Project D"
    ];
     
    for(var i = 2023; i>= 2014; i--) {
      this.Years.push(i);
    }

    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

    this.TeamMembers = [
      {
        Region:'East', Members: [
        { ID:1, Name:'Mahesh',Status:'Busy'},
        { ID:2, Name:'Miller',Status:'Available'},
        { ID:3, Name:'Jemes',Status:'Busy'},
        { ID:4, Name:'Jackson',Status:'Available'}
      ]
      },
      {
        Region:'West', Members: [
        { ID:1, Name:'Jithesh',Status:'Available'},
        { ID:2, Name:'anurag',Status:'Busy'},
        { ID:3, Name:'jamison',Status:'Busy'},
        { ID:4, Name:'petresion',Status:'Available'}
      ]
      },
      {
        Region:'South', Members: [
        { ID:1, Name:'mark dos',Status:'Busy'},
        { ID:2, Name:'shakib',Status:'Available'},
        { ID:3, Name:'maxi',Status:'Available'},
        { ID:4, Name:'brenda',Status:'Busy'}
      ]
      },
      {
        Region:'North', Members: [
        { ID:1, Name:'mack',Status:'Busy'},
        { ID:2, Name:'porish',Status:'Available'},
        { ID:3, Name:'hemand',Status:'Busy'},
        { ID:4, Name:'yardi',Status:'Available'}
      ]
      },
    ];
  }

  onProjectChange($event:any) {
    if($event.target.innerHTML == 'Project A'){
       this.ProjectCost = 322189;  
       this.CurrentExpenditure = 43567; 
       this.AvailableFunds = 23456;
    }
    else if($event.target.innerHTML == 'Project B'){
       this.ProjectCost = 786534;  
       this.CurrentExpenditure = 987678; 
       this.AvailableFunds = 2456;
    }
    else if($event.target.innerHTML == 'Project C'){
       this.ProjectCost = 563452;  
       this.CurrentExpenditure = 75856; 
       this.AvailableFunds = 8446;
    }
    else if($event.target.innerHTML == 'Project D'){
       this.ProjectCost = 23145;  
       this.CurrentExpenditure = 13245; 
       this.AvailableFunds = 5342;
    }
 }
}