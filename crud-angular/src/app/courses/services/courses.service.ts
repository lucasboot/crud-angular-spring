import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root' //disponivel a nivel global do projeto
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  //Métodos para suprir os componentes
listAll(): Course[]{
  return [{ _id: '1', name: 'Angular', category: 'Front-end'}];
}
}
