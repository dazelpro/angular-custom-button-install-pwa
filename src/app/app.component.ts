import { Component } from '@angular/core';
import { PwaService } from './pwa.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular-custom-install-pwa';
    constructor( public pwa: PwaService ) {
        
    }
}
