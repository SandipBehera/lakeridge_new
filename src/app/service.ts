import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UserService {
  private userUrl = 'https://wf0gc9gyr4.execute-api.us-west-2.amazonaws.com/default/LeadStorw'; // Change to the server URL after upload

  constructor(private http: HttpClient) {}

  // Function to submit the form data to the server
  formSubmit(user: User): Observable<any> {
    return this.http.post<any>(this.userUrl, user, httpOptions).pipe(
      tap((response) => console.log('Form submitted successfully:', response)), // Success logging
      catchError(this.handleError<any>('formSubmit', {})) // Error handling
    );
  }

  // Generic error handler
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error); // Log error to console for debugging
      return of(result as T); // Return an empty result to keep the app running
    };
  }
}
