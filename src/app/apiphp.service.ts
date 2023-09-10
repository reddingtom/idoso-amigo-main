import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiphpService {

  
  constructor(public http: HttpClient) { }


  
  register(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost/php/register.php', data, { headers: headers, responseType: 'json'})
  }

}
