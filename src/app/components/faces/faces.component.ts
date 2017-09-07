import { FacesService } from './../../services/faces.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faces',
  templateUrl: './faces.component.html',
  styleUrls: ['./faces.component.css']
})
export class FacesComponent implements OnInit {

  private baseUrl = 'https://api.adorable.io/avatars/250/';
  private endUrl = '@adorable.io.png';
  faceUrl: string;

  constructor(
    // private facesService: FacesService
  ) {
    // facesService.getListOfFaces().subscribe((list) => {
    //   console.log(list);
    // });
    setInterval(() => {
      this.getImage();
    }, 1500);
  }
  ngOnInit() { }

  getImage() {
    this.faceUrl = `${this.baseUrl}${this.randomNumber()}${this.endUrl}`;
  }

  randomNumber() {
    return `${Math.floor((Math.random() * 100) + 1)}`;
  }

}
