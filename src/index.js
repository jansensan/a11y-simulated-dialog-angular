import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './scripts/components/app/module';

require('./styles/main.scss');

platformBrowserDynamic().bootstrapModule(App);