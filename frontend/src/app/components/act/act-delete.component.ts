import { Component } from "@angular/core";
import { ActService } from 'src/app/services/act.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector : 'act-del',
    templateUrl : '../../views/act/act-delete.html',
    providers : [ActService]
})
export class ActDeleteComponent {

    constructor (
        private actService : ActService,
        private activatedRoute : ActivatedRoute,
        private _router : Router
    ) { }

    delAct() : void {
        let id : number;
        this.activatedRoute.params.subscribe (
            params =>  id = parseInt(params['id'],10)
        );

        this.actService.delAct(id).subscribe (
            response => this._router.navigate(["/act-list"]),
            error =>  console.log("Error deleting act", error)
        );
    }
}