//package com.taskmanager.App.Config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//@EnableWebSecurity
//public class WebSecurityConfiguration {
//
//	@Bean
//	public SecurityFilterChain configure(HttpSecurity http) throws Exception {
//		//hcda4h
//		http
//		     .csrf().disable()
//		     .authorizeHttpRequests()
//		     .anyRequest()
//		     .authenticated()
//		     .and()
//		     .httpBasic();
//		return http.build();
//		
//	}
//}
