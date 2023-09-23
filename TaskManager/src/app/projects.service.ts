import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient:HttpClient) { }

  getAllProjects(): Observable<Project[]> {
  return this.httpClient.get<Project[]>('http://localhost:8080/api/project/getProjects',{responseType:"json"});
  }

  insertProject(newProject:Project): Observable<Project> {
    return this.httpClient.post<Project>('http://localhost:8080/api/project/create',newProject, {responseType:"json"}); 
  }

  updateProject(existingProject:Project): Observable<Project> {
    return this.httpClient.put<Project>('http://localhost:8080/api/project/update',existingProject, {responseType:"json"}); 
  }

  deleteProject(projectID:number): Observable<string> {
    return this.httpClient.delete<string>('http://localhost:8080/api/project/delete?projectID='+ projectID,); 
  }
}
