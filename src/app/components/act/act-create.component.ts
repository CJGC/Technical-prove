import { Component } from '@angular/core';
import { ActService } from 'src/app/services/act.service';
import { Act } from 'src/app/models/act';
import { Router } from '@angular/router';

@Component ({
    selector : 'act-create',
    templateUrl : '../../views/act/act-create.html',
    providers : [ActService]
})
export class ActCreateComponent {

    private title : string;
    private act : Act;

    constructor (
        private actService : ActService,
        private _router : Router
    ) 
    {
        this.title = "Creating an act";
        this.act = new Act(0,"","","",null,null);
    }

    createActa() : void {
        this.actService.creatAct(this.act).subscribe (
            response => this._router.navigate(["/act-list"]),
            error => console.log("Error saving act!", error)
        );
    }
}