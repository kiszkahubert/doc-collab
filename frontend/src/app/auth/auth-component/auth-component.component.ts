import {Component, EventEmitter, input, OnInit, Output, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-auth-component',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './auth-component.component.html',
  styleUrl: './auth-component.component.css'
})
export class AuthComponentComponent implements OnInit{
  title= input.required<string>();
  buttonText = input.required<string>();
  linkText = input.required<string>();
  linkUrl = input.required<string>();
  isLogin = input<boolean>(false);
  @Output() formSubmit = new EventEmitter<{ email: string, password: string, name?: string, surname?: string }>;
  email: string = '';
  password: string = '';
  name?: string = '';
  surname?: string = '';
  submitForm(){
    this.formSubmit.emit({
      email: this.email,
      password: this.password,
      name: this.name,
      surname: this.surname
    });
  };
  ngOnInit() {
    this.setupCursor('email-input', 'cursor-email');
    this.setupCursor('password-input', 'cursor-password');
    if(this.isLogin()){
      this.setupCursor('name-input', 'cursor-name');
      this.setupCursor('surname-input', 'cursor-surname');
    }
  }
  setupCursor(inputId: string, cursorId: string): void {
    const input = document.getElementById(inputId) as HTMLInputElement;
    const cursor = document.getElementById(cursorId) as HTMLElement;
    const measureDiv = document.createElement('div');
    const computedStyle = getComputedStyle(input);
    measureDiv.style.position = 'fixed';
    measureDiv.style.visibility = 'hidden';
    measureDiv.style.whiteSpace = 'pre';
    measureDiv.style.fontFamily = computedStyle.fontFamily;
    measureDiv.style.fontSize = computedStyle.fontSize;
    measureDiv.style.padding = computedStyle.padding;
    document.body.appendChild(measureDiv);
    const updateCursorPosition = () => {
      measureDiv.textContent = input.value.length > 0 ? input.value : '';
      cursor.style.left = `${measureDiv.offsetWidth}px`;
    };
    input.addEventListener('input', updateCursorPosition);
    input.addEventListener('focus', () => {
      cursor.style.display = 'block';
      updateCursorPosition();
    });
    input.addEventListener('blur', () => {
      cursor.style.display = 'none';
    });
    updateCursorPosition();
  }
}
