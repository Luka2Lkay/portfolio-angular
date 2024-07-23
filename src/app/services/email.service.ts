import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private _http: HttpClient) {}

  private baseUrl: string = 'http://localhost:3300';

  sendEmail(data: Email): Observable<Email> {
    return this._http.post<Email>(`${this.baseUrl}/email/send-message`, data);
  }
}
