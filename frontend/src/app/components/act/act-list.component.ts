import { Component } from '@angular/core';
import { ActService } from 'src/app/services/act.service';
import { Act } from 'src/app/models/act';
import { GeneralProvider } from 'src/app/providers/general.provider';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/api';
import { CreateActComponent } from './act-create.component';
import { ActEditComponent } from './act-edit.component';

@Component ({
    selector : 'act-list',
    templateUrl : '../../views/act/act-list.html',
    providers : [ActService]
})
export class ActListComponent {

    private title : string;
    public actList : Array<Act>;

    constructor (
        private actService : ActService,
        private generalProvider : GeneralProvider,
        private dialogService : DialogService,
        private _router : Router
    )
    {
        this.title = "Act management";
        this.getAct();
    }

    public getAct() {
        this.actService.getActList().
        subscribe(
            actArray => this.actList = actArray,
            error => console.log("Error getting act list: " , error)
        );
    }

    public openDialog(act : Act, tc : string) {
        let targetComponent : any;
        if (tc == "create")
            targetComponent = CreateActComponent;
        else if (tc == "edit")
            targetComponent = ActEditComponent;
        else 
            targetComponent = null;

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

    /*
    public openEditDialog(act : Act) {
        let dialog = this.dialogService.open(
            ActEditComponent,
            {
                header : 'Editing act',
                width : '60%',
                data : {act : act}
            }
        );

        dialog.onClose.subscribe(
            response => {if (response != null) this.getAct()},
            error => console.log("Error closing dialog", error)
        );
    }
    */

    public saveDataIntoGeneralProvider(url : string, act : Act) : void {
        this.generalProvider.clearData();
        this.generalProvider.setData([act]);
        this._router.navigate([url]);
    }

    public loadData(event) {
        console.log(event.first);
        console.log(event.rows);
    }
}