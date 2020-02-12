import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {
  //inputs
  @Input() state: any
  @Input() name: any
  @Input() period: any
  @Input() percent: any
  @Input() credits: any
  @Input() points: any
  @Input() prom: any
  @Input() tableSubjects: any
  @Input() tableSemester: any

  // @viewChild
  option: string = 'Primer Semestre'

   //@output
   @Output() cerrar = new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.choose()
  }

  choose() {

    let position = 0
    for (let i = 0; i < this.tableSemester.length; i++) {
      if (this.tableSemester[i][0].semester == this.option) {
        position = i
      }
    }

    this.tableSubjects = this.tableSemester[position];
  }

  close(){
    this.cerrar.emit();
  }

}
