import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'pt-br';
    translate.use(savedLang);
  }

  ngOnInit() {
    localStorage.setItem('lang', 'pt-br');
  }
}