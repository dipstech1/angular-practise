import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of, Subject, interval } from 'rxjs'
import { share, multicast, refCount, publish, take, takeLast, last, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL = "https://reqres.in/";

  response = [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    },
    {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
    }
  ]

  constructor(private http: HttpClient) { }

  getInfo(): Observable<any> {
    // let d = of(this.response)
    return this.http.get(this.URL + "api/users/2")  
    .pipe(
      publish(),
      refCount()
    )
  }

  login() {
    let userInfo = {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    }
    return this.http.post("https://reqres.in/api/login", userInfo)
  }
}
