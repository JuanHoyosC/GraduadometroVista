import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import { ContentService } from '../../services/content.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loading: boolean = false
  alert: boolean = false
  form: boolean = true
  mensaje: String = ''

  //Inputs
  @ViewChild('user', { static: false }) user: ElementRef
  @ViewChild('password', { static: false }) password: ElementRef

  //@output
  @Output() valueChange = new EventEmitter();
 

  constructor(private _content: ContentService) { }

  ngOnInit() {

  }

  login() {
    this.loading = true

    //Get user and password
    const user = this.user.nativeElement.value
    const password = this.password.nativeElement.value
  
    this._content.getData(user, password).subscribe(res => {
   
      if (res.status == 'Ingreso exitoso'){
        this.data = res   
        this.loading = false
        this.form = false
        this.alert = false
        this.valueChange.emit(this.data); 
      }

      if(res.status == 'Usuario o contraseña incorrecta') {
        this.loading = false
        this.alert = true
        this.mensaje = 'Usuario o contraseña incorrecta'
      }

      if(res.status == 'Hubo un error') {
        this.loading = false
        this.alert = true
        this.mensaje = 'Hubo un error, intentelo de nuevo'
      }
      
    })
  }

  data

}
