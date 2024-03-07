import {enableProdMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {environment} from './environments/environment';
import { AppModule } from './app/app.module';
const _window = window as any;
if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule).then((ref) => {
  // Ensure Angular destroys itself on hot reloads.
  if (_window['ngRef']) {
    _window['ngRef'].destroy();
  }
  _window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch((err) => console.error(err));
