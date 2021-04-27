import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PwaService {

    private promptEvent: any;
    status = false

    constructor() { }

    public initPwaPrompt() {
        window.addEventListener('beforeinstallprompt', (event: any) => {
            event.preventDefault();
            this.promptEvent = event;
            this.setButton(true);
        });
    }

    public setButton(arr) {
        return this.status = arr;
    }

    public installPwa() {
        this.setButton(false);
        this.promptEvent.prompt();
        this.promptEvent.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User mengizinkan install pwa');
            } else {
                console.log('User menolak install pwa');
            }
            this.promptEvent = null;
        });
    }
}
