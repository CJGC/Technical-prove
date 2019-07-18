import { Component, SystemJsNgModuleLoader } from '@angular/core';
import { Act } from 'src/app/models/act';
import { GeneralProvider } from 'src/app/providers/general.provider';

@Component ({
    selector : 'act-show',
    templateUrl : '../../views/act/act-show.html',
    providers : []
})
export class ActShowComponent {
    private title : string;
    private act : Act;

    constructor (
        private generalProvider : GeneralProvider
    ) {
        this.title = "Act details";
        this.act = <Act> this.generalProvider.getData()[0];
    }

}