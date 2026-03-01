import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-button',
  imports: [RouterModule],
  templateUrl: './form-button.html',
  styleUrl: './form-button.scss',
})
export class FormButton {
  @Input() btnText!: string;
  @Input() routerLink!: string;
}
