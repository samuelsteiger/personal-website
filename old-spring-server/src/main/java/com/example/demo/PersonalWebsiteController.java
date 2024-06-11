package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class PersonalWebsiteController {
    
	/*
    @GetMapping("/")
	public String index() {
		return "Greetings from Spring Boot!";
	}
	*/

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/blog/*")
	public BlogPost blogPosts() {
		return new BlogPost(1);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping(
  		value = "/note", consumes = "application/json", produces = "application/json")
	public void takeNote(@RequestBody Note note, HttpServletResponse response) {
		System.out.println(note);
	}
}
