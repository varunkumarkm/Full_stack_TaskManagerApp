import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private apiUrl = 'http://localhost:8080/api/project/delete';

  constructor(private httpClient:HttpClient) { }

  getAllProjects(): Observable<Project[]> {
  return this.httpClient.get<Project[]>('http://localhost:8080/api/project/getProjects',{responseType:"json"})
  }

  insertProject(newProject:Project): Observable<Project> {
    return this.httpClient.post<Project>('http://localhost:8080/api/project/create',newProject); 
  }

  updateProject(existingProject:Project): Observable<Project> {
    return this.httpClient.put<Project>('http://localhost:8080/api/project/update',existingProject, {responseType:"json"}); 
  }

  deleteProject(projectID: number): Observable<any> {
    const url = `${this.apiUrl}/${projectID}`;
    return this.httpClient.delete(url);
  }

  SearchProjects(searchBy:string, searchText:string):Observable<Project[]> {
    return this.httpClient.get<Project[]>('http://localhost:8080/api/project/search/'+searchBy+"/"+searchText,{responseType:"json"});
  }
}
