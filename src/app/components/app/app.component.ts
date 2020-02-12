import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  view: boolean = false
  data = []

  displayCounter(e) {
    this.data = []
    this.data = e
    this.view = true
  }

  cerrar() {
    this.view = false
  }

}
