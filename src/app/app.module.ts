import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PwaService } from './pwa.service';

const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        {provide: APP_INITIALIZER, useFactory: initializer, deps: [PwaService], multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
