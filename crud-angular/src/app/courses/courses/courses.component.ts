import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category', 'actions'];

  constructor(private coursesService: CoursesService,
     public dialog: MatDialog,
     private  router: Router,
     private route: ActivatedRoute) {
    //this.courses = [];
    this.courses$ = this.coursesService.listAll().pipe(
      catchError(error => {
        this.onError("404 not found: banco de cursos indisponível!")
        return of([])
      })
    );
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  onAdd(){
    console.log('onAdd');
    this.router.navigate(['new'], {relativeTo: this.route});

  }
  ngOnInit(): void {
  }


}
