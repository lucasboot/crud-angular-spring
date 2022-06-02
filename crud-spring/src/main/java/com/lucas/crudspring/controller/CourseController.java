package com.lucas.crudspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lucas.crudspring.model.Course;
import com.lucas.crudspring.repository.CourseRepository;

import lombok.AllArgsConstructor;



@RestController //contém um end-point para acessar a API, java servlet
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    private final CourseRepository courseRepository; //final boa prática para não alterar a instancia
    /*   AllArgsConstructor do Lombok substitui
    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }
    */ 
    @GetMapping // igual a @RequestMapping(method = Request.GET)
    public List<Course> list(){
        return courseRepository.findAll();
    }
}
