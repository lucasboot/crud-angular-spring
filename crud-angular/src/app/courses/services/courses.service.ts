import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay, first, take, tap } from 'rxjs';
@Injectable({
  providedIn: 'root' //disponivel a nivel global do projeto
})
export class CoursesService {
  private readonly API = '/assets/courses.json';
  constructor(private httpClient: HttpClient) { }

  //Métodos para suprir os componentes
listAll(){
  return this.httpClient.get<Course[]>(this.API).pipe(
   //take(1),
   first(), //apenas a primeira resposta
    delay(2000),
   tap(courses => console.log(courses))
  );
}
}
