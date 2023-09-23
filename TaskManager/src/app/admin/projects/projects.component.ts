import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  newProject:Project = new Project();

  editProject:Project = new Project();
  editIndex:any = null;

  deleteProject:Project = new Project();
  deleteIndex:any = null;

  constructor(private projectsService:ProjectsService) { 
    this.projects = [];
    this.newProject
  }

  ngOnInit(): void {
    this.projectsService.getAllProjects().subscribe(
      (response:Project[])=> {
        this.projects = response;
      });
  }
  onSaveClick() {
    this.projectsService.insertProject(this.newProject).subscribe(
      (response)=>{
       this.projects.push(this.newProject);
     }, 
      (error)=>{ 
       console.log(error);
     })
  }
  onEditClick(event: Event,index:number) {
    this.editProject.projectID = this.projects[index].projectID
    this.editProject.projectName = this.projects[index].projectName
    this.editProject.dateOfStart = this.projects[index].dateOfStart
    this.editProject.teamSize = this.projects[index].teamSize

    this.editIndex = index;
  }
  onUpdateClick() {
    this.projectsService.updateProject(this.editProject).subscribe(
      (response:Project) => {
        var p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.projects[this.editIndex] = p;
      }, 
      () => { 

      });
  }

  onDeleteClick(event: Event, index:number){
    this.deleteIndex.projectID = this.projects[index].projectID
    this.deleteIndex.projectName = this.projects[index].projectName
    this.deleteIndex.dateOfStart = this.projects[index].dateOfStart
    this.deleteIndex.teamSize = this.projects[index].teamSize
  }
  onDeleteConfirmClick(){
    this.projectsService.deleteProject(this.deleteProject.projectID).subscribe(
      (response) => {
        this.projects.splice(this.deleteIndex, 1);
      },
      (error) => {
        console.log(error);
      });
  }
}


