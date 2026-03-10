import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader, TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';

export function HttpLoaderFactory() {
  return new TranslateHttpLoader();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateHttpLoader(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'pt-br',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]  
        }
      })
    )
  ]
};
