import { Component } from '@angular/core';
import { ActService } from 'src/app/services/act.service';
import { Act } from 'src/app/models/act';
import { Router } from '@angular/router';
import { DialogService, MessageService } from 'primeng/api';
import { CreateActComponent } from './act-create.component';
import { ActEditComponent } from './act-edit.component';
import { ActDeleteComponent } from './act-delete.component';

@Component ({
    selector : 'act-list',
    templateUrl : '../../views/act/act-list.html',
    providers : [ActService, DialogService, MessageService]
})
export class ActListComponent {

    private title : string;
    public actList : Array<Act>;

    constructor (
        private actService : ActService,
        private dialogService : DialogService,
        private _router : Router
    )
    {
        this.title = "Act management";
        this.getAct();
    }

    public getAct() : void {
        this.actService.getActList().
        subscribe(
            actArray => this.actList = actArray,
            error => console.log("Error getting act list: " , error)
        );
    }

    public openDialog(act : Act, tc : string) : void {
        let targetComponent : any;
        if (tc == "create")
            targetComponent = CreateActComponent;
        else if (tc == "edit")
            targetComponent = ActEditComponent;
        else 
            targetComponent = ActDeleteComponent;

        let dialog = this.dialogService.open(
            targetComponent,
            {
                header : tc + ' act',
                width : '60%',
                data : {act : act}
            }
        );

        dialog.onClose.subscribe( 
            response => {if (response != null) this.getAct()},
            error => console.log("Error closing dialog", error)
        );
    }

    public loadData(event) : void {
        console.log(event.first);
        console.log(event.rows);
    }
}