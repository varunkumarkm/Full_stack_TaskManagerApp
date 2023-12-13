package com.taskmanager.App.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.taskmanager.App.Entities.Project;
import com.taskmanager.App.Services.ProjectService;

@RestController
@RequestMapping("api/project")
@CrossOrigin
public class ProjectController {

	@Autowired
	private ProjectService projectService;
	
	@RequestMapping(value="/create", method = RequestMethod.POST)
	public ResponseEntity<Project> createProject(@RequestBody Project project){
		projectService.save(project);
		return new ResponseEntity<Project>(project, HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(value = "/getProjects", method = RequestMethod.GET)
	public List<Project> getAllProjects(){
		return projectService.featchAll();
	}
	
	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public ResponseEntity<Project> updateProject(@RequestBody Project project){
		projectService.updateProject(project);
		return new ResponseEntity<Project>(project, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/delete/{projectID}", method = RequestMethod.DELETE)
	public ResponseEntity<Project> deleteProject(@PathVariable Integer projectID){
		projectService.deleteProject(projectID);
        return new ResponseEntity<Project>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "/search/{searchBy}/{searchText}", method = RequestMethod.GET)
	 public ResponseEntity<List<Project>> searchProject(
	            @PathVariable String searchBy,
	            @PathVariable String searchText) {
	        List<Project> searchResults = projectService.searchProject(searchBy, searchText);
	        return new ResponseEntity<>(searchResults, HttpStatus.OK);
	    }
}





