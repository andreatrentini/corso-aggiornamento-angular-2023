import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor(private httpClient: HttpClient) { }

  getUtenti(): Observable<any> {
    return this.httpClient.get('/assets/dati.json');
  }
}
