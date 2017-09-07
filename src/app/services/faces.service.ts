import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FacesService {
  constructor(
    private http: Http
  ) { }
  // Did not work with service, it doesn't support cors.
  getListOfFaces(): Observable<any[]> {
    return this.http.get('https://api.adorable.io/avatars/face/eyes10/nose9/mouth10/8e8895')
      .map((res: Response) => {
        return res.json().data;
        // console.log(res.json());
      })
  }

}