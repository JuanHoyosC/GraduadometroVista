import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private _http: HttpClient) { }
  
  getData(user: String, password: String) {

    const dataUser = {
      user: user,
      password: password
    }
    return this._http.post('http://localhost:3000', dataUser)
  }
}
