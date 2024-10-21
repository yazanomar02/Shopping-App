import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    // Regiter ngx-bootstarp
    importProvidersFrom(BrowserAnimationsModule, BsDatepickerModule.forRoot()),
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    })), provideFirebaseApp(() => initializeApp({"projectId":"shoppingapp-4fdb0","appId":"1:38504604819:web:ebb88b8e3480ea20439966","storageBucket":"shoppingapp-4fdb0.appspot.com","apiKey":"AIzaSyBgD0DjD2cTpHDjRCuT9QBgNv9FTrOvAwc","authDomain":"shoppingapp-4fdb0.firebaseapp.com","messagingSenderId":"38504604819"})), provideAuth(() => getAuth()),

    ]
};



// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
