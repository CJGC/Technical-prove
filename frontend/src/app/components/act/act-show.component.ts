import { Component, SystemJsNgModuleLoader, OnInit } from '@angular/core';
import { Act } from 'src/app/models/act';
import { ActivatedRoute, Router } from '@angular/router';
import { ActService } from 'src/app/services/act.service';

@Component ({
    selector : 'act-show',
    templateUrl : '../../views/act/act-show.html',
    providers : [ActService]
})
export class ActShowComponent implements OnInit {
    private title : string;
    public act : Array<Act>;

    constructor (
        private _router : Router,
        private activatedRouter : ActivatedRoute,
        private actService : ActService
    ) {
        this.title = "Act details";
        this.act = new Array<Act>();
    }

    ngOnInit() {
        this.getAct();
    }

    public getAct() {
        this.activatedRouter.paramMap.subscribe ( param => {
            const act_id = +param.get("id");
            if (act_id == null) {
                console.log("Incorrect argument's name");
                return
            }
            this.actService.getAct(act_id).subscribe (
                res => this.act.push(res),
                error => console.log("Error getting act: ", error)
            );
        });
    }

}