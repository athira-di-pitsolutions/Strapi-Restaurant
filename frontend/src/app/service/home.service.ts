import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getHomeData(): Observable<any> {
    return this.http.get(this.apiUrl + 'home?populate=*');
  }

  getHeaderData(): Observable<any> {
    return this.http.get(this.apiUrl + 'header?populate=*');
  }
}
