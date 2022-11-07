import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TypeMusic } from '../models/type-music.model'
@Injectable({
  providedIn: 'root'
})
export class TypeMusicService {

  baseurl = 'http://localhost:8081/typeMusicApi';
  constructor(private http: HttpClient) {}

  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

  createTypeMusic(data: any) : Observable<TypeMusic> {
    return this.http.post<TypeMusic> (this.baseurl + '/create',JSON.stringify(data),this.httpOptions).pipe(retry(1), catchError(this.errorHandl));
  }
    
  getAllTypeMusic(): Observable<TypeMusic[]> {
    return this.http
      .get<TypeMusic[]>(this.baseurl + '/getAll')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
