import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }
  getData():Observable<any>{
    return this._http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
