import { Component } from '@angular/core';
import {QuillModule} from 'ngx-quill';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-document',
  imports: [QuillModule, FormsModule],
  templateUrl: './document.component.html',
  styleUrl: './document.component.css'
})
export class DocumentComponent {
  editorContent: string = '';
}
