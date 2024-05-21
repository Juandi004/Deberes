import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';  // Asegúrate de tener FormsModule importado aquí
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: NZ_I18N, useValue: en_US },
    importProvidersFrom(
      FormsModule,  // Asegúrate de que FormsModule esté aquí
      HttpClientModule,
      BrowserAnimationsModule,
      NzButtonModule,
      NzInputModule,
      NzListModule
    )
  ]
};
