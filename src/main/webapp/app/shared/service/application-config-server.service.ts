import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationConfigServerService {
  constructor(private http: HttpClient) {}

  obterConfiguracaoAplicacao(): Observable<string> {
    return this.http.get('api/aplicacao-config/ambiente', { responseType: 'text' });
  }
}
