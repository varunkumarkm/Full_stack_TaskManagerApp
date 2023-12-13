package com.taskmanager.App.Repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.taskmanager.App.Entities.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {

	List<Project> findByProjectNameContaining(String searchText);

	List<Project> findByProjectID(int parseInt);

	List<Project> findByTeamSize(int teamSize);

	List<Project> findByDateOfStart(String searchText);

	
	
}
