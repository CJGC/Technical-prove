import { Component } from '@angular/core';
import { Act } from 'src/app/models/act';
import { Router } from '@angular/router';
import { GeneralProvider } from 'src/app/providers/general.provider';
import { ActService } from 'src/app/services/act.service';

@Component({
    selector : 'act-edit',
    templateUrl : '../../views/act/act-edit.html',
    providers : [ActService]
})
export class ActEditComponent {
    private title : string;
    private act : Act;

    constructor(
        private actService : ActService,
        private _route : Router,
        private generalProvider : GeneralProvider
    )
    {
        this.title = "Edit act";
    }

    ngOnInit() {
        this.act = <Act> this.generalProvider.getData().pop();
    }

    editAct() : void {
        this.actService.editAct(this.act).subscribe (
            result => this._route.navigate(['/act-list']),
            error => console.log("Error upgrading act.", error)
        );
    }

}