import { Component, HostListener, OnDestroy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    TranslateModule
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout implements OnDestroy {
  brandName = 'Cards Tracker';
  sidebarOpen = true;
  profileOpen = false;
  private documentClickListener: (() => void) | null = null;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleProfile(): void {
    this.profileOpen = !this.profileOpen;
    if (this.profileOpen) {
      setTimeout(() => {
        this.documentClickListener = () => this.closeProfile();
        document.addEventListener('click', this.documentClickListener);
      }, 0);
    } else {
      this.removeDocumentListener();
    }
  }

  closeProfile(): void {
    this.profileOpen = false;
    this.removeDocumentListener();
  }

  private removeDocumentListener(): void {
    if (this.documentClickListener) {
      document.removeEventListener('click', this.documentClickListener);
      this.documentClickListener = null;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeProfile();
  }

  ngOnDestroy(): void {
    this.removeDocumentListener();
  }
}
