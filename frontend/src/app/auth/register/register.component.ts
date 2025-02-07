import { Component } from '@angular/core';
import {AuthComponentComponent} from '../auth-component/auth-component.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
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
