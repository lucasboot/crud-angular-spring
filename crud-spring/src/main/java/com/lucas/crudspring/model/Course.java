package com.lucas.crudspring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data //Lombok
@Entity 
public class Course {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @JsonProperty("_id") //acabar com o conflito de nomes no frontend
    private Long id;

    @Column(length=200, nullable=false)
    private String name;

    @Column(length=15, nullable=false)
    private String category;
}
