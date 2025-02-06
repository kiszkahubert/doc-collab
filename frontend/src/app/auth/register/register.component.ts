import { Component } from '@angular/core';
import {AuthComponentComponent} from '../auth-component/auth-component.component';

@Component({
  selector: 'app-register',
  imports: [
    AuthComponentComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  handleRegister(creds: { email: string, password: string }){
    console.log(creds);
  }
}
