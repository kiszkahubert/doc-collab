import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthComponentComponent} from '../auth-component/auth-component.component';

@Component({
  selector: 'app-login',
  imports: [FormsModule, AuthComponentComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  handleLogin(creds: { email: string, password: string }){
    console.log(creds);
  }
}
