import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url:any;
  constructor(private http: HttpClient) { 
    this.url = "https://aquamarine-petite-handspring.glitch.me/"
  }

  public get_data() {
    return this.http.get(this.url+"bfhl");
  }

  public add_data(payload: any) {
    return this.http.post(this.url+"bfhl",payload);
  }
  
  // Additional methods and logic for making HTTP requests
}

