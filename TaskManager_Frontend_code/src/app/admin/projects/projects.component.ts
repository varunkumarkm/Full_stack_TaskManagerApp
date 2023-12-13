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
  deleteIndex: any = -1;

  searchBy:string="ProjectName";
  searchText:string="";

  constructor(private projectsService:ProjectsService) { 
    this.projects = [];
    this.newProject
    this.deleteProject
  }

  ngOnInit(): void {
    this.projectsService.getAllProjects().subscribe(
      (response:Project[])=> {
        this.projects = response;
      });
  }
  onSaveClick(): void {
    this.projectsService.insertProject(this.newProject).subscribe(
      (response: any) => { 
        this.projects.push(response);
        this.newProject = {
          projectID: 0,
          projectName: '',
          dateOfStart: '',
          teamSize: 0,
        };
      },
      (error) => {
        console.error('Error inserting project:', error);
      });
  }
  
  onEditClick(event:Event, index:number) {
    
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

  onDeleteClick(event:Event, index:number) {
    this.deleteIndex = index;

    this.deleteProject.projectID = this.projects[index].projectID
    this.deleteProject.projectName = this.projects[index].projectName
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart
    this.deleteProject.teamSize = this.projects[index].teamSize
  }

  onDeleteConfirmClick(projectID: number, index: number) {
    if (index >= 0 && index < this.projects.length) {
      const deletedProject = this.projects[index];
      const deletedProjectID = deletedProject.projectID;
      const confirmMessage = `! Are you deleting Project ID ${deletedProjectID} - ${deletedProject.projectName}?`;
  
      const isConfirmed = window.confirm(confirmMessage);
  
      if (isConfirmed) {
        
        this.projectsService.deleteProject(deletedProjectID).subscribe(
          (response) => {
            this.projects.splice(index, 1);
            this.deleteIndex = -1;
            this.deleteProject = new Project();
          },
          (error) => {
            console.log(error);
          });
      }
    }
  }
    onSearchClick(){
      this.projectsService.SearchProjects(this.searchBy,this.searchText).subscribe(
        (response:Project[]) => {
          this.projects = response
        },
        (error) => {
          console.log('An error occured:', error);
        });
    }
}
