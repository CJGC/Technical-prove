import { Component } from '@angular/core';

@Component({
    selector : 'missingwebpage',
    templateUrl : '../../views/errors/missing-webpage.html'
})
export class MissinWebPageComponent {
    private title : string;

    constructor () {
        this.title = "Page not found error 404!";
    }
}