import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { ButtonElementModule } from './app/button/button.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  // .bootstrapModule(AppModule)
  .bootstrapModule(ButtonElementModule)
  .catch((err) => console.error(err));
