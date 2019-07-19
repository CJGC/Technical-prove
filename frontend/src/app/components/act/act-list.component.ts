import { Component } from '@angular/core';
import { ActService } from 'src/app/services/act.service';
import { Act } from 'src/app/models/act';
import { GeneralProvider } from 'src/app/providers/general.provider';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/api';
import { CreateActComponent } from './act-create.component';

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

    public openCreateDialog() {
        let dialog = this.dialogService.open(
            CreateActComponent,
            {
                header : 'Creating act',
                width : '60%' 
            }
        )

        dialog.onClose.subscribe( 
            response => this.getAct(),
            error => console.log("Error closing dialog", error)
        );
    }

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