import { Component, ViewChild } from '@angular/core';
import { CardsForm } from '../cards-form/cards-form';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [
    CardsForm,
    MatIcon,
    TranslateModule
  ],
  templateUrl: './cards-list.html',
  styleUrl: './cards-list.scss',
})
export class CardsList {
  @ViewChild(CardsForm) cardsForm!: CardsForm;

  openModal(): void {
    this.cardsForm.openModal();
  }
}