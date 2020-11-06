import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}
  getWeather(location){
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=4e0d9984d9aeb0b31a2ff8d4637bb0b8&query='+location
    );
  }
}
