import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Poll } from '../models/poll.model';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  baseurl = 'http://localhost:8080/pollApi';
  constructor(private http: HttpClient) {}

  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

  createPoll(data: any) : Observable<Poll> {
    return this.http.post<Poll> (this.baseurl + '/create',JSON.stringify(data),this.httpOptions).pipe(retry(1), catchError(this.errorHandl));
  }
    
  getAllPoll(): Observable<Poll[]> {
    return this.http
      .get<Poll[]>(this.baseurl + '/getAll')
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
