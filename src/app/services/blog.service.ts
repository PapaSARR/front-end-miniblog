import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../modele/Contact';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public host:string= "http://localhost:8080";
  constructor(private http:HttpClient) { }

  public getResource(url){
    return this.http.get(url);
  }

  public saveContact(url, data):Observable<Contact>{
    return this.http.post<Contact>(url,data);
  }
}
