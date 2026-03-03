import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
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
