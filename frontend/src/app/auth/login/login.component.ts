import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';

  ngOnInit() {
    this.setupCursor('email-input','cursor-email');
    this.setupCursor('password-input', 'cursor-password');
  }
  //TODO THIS SHITTY CODE IS NOT FUCKING WORKING WHEN I CHANGE PADDING OD MARGIN OR ANYTHING IN THE FUCKING LOGING PAGE
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

  submitCredentials(event: Event): void{
    //TODO request do servera z this.email i this.password
  }
}
