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
        // this.promptEvent.prompt();
        // hide our user interface that shows our A2HS button
        this.setButton(false);
        // Show the prompt
        this.promptEvent.prompt();
        // Wait for the user to respond to the prompt
        this.promptEvent.userChoice
            .then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                this.promptEvent = null;
            });
    }
}
