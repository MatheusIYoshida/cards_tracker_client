import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-input',
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './form-input.html',
  styleUrl: './form-input.scss',
})
export class FormInput {
  @Input() enableLabel!: boolean;
  @Input() labelText!: string;
  @Input() maxLength!: number;
  @Input() placeholderText: string = '';
  @Input() type: string = 'text';
}
