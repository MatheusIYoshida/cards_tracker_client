import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [
    CommonModule, 
    MatFormFieldModule, 
    MatInputModule,
    TranslateModule
  ],
  templateUrl: './textarea.html',
  styleUrls: ['./textarea.scss'],
})
export class Textarea {
  @Input() enableLabel = false;
  @Input() labelText = '';
  @Input() placeholderText = '';
  maxlength = 2000;
  rows = 7;
}
