package com.taskmanager.App.Services;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.taskmanager.App.Entities.Project;
import com.taskmanager.App.Repository.ProjectRepository;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository projectRepo;

	public void save(Project project) {
		projectRepo.save(project);	
	}

	public List<Project> featchAll() {
		List<Project> findAll = projectRepo.findAll();
		return findAll;		
	}

	public void updateProject(Project project) {
		projectRepo.save(project);
	}

	public void deleteProject(Integer projectID) {
		projectRepo.deleteById(projectID);		
	}

	public List<Project> searchProject(String searchBy, String searchText) {
        List<Project> projects = new ArrayList<>();

        if (searchText != null && !searchText.isEmpty()) {
            if ("ProjectID".equals(searchBy)) {
                try {
                    int projectId = Integer.parseInt(searchText);
                    projects = projectRepo.findByProjectID(projectId);
                } catch (NumberFormatException e) {
                    e.printStackTrace();
                }
            } else if ("ProjectName".equals(searchBy)) {
                projects = projectRepo.findByProjectNameContaining(searchText);
                
            } else if ("DateOfStart".equals(searchBy)) {
            	projects = projectRepo.findByDateOfStart(searchText);
            	
            } else if ("TeamSize".equals(searchBy)) {
            	try {
                    int teamSize = Integer.parseInt(searchText);
                    projects = projectRepo.findByTeamSize(teamSize);
                } catch (NumberFormatException e) {
                    e.printStackTrace();
                }
            }
        }
        return projects;
    }
}


















