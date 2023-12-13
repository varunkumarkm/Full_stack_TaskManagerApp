package com.taskmanager.App.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int projectID;
	private String projectName;
	private String dateOfStart; 
	private int teamSize;
}
