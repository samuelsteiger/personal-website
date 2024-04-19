package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
public class PersonalWebsiteController {
    
    @GetMapping("/")
	public String index() {
		return "Greetings from Spring Boot!";
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/blog/*")
	public BlogPost blogPosts() {
		return new BlogPost(1);
	}
}
