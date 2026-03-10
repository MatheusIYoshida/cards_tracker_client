import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-form-button',
  imports: [RouterModule, TranslateModule],
  templateUrl: './form-button.html',
  styleUrl: './form-button.scss',
})
export class FormButton {
  @Input() btnText!: string;
  @Input() routerLink!: string;
}
