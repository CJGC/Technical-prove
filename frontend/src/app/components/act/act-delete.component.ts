import { Component } from "@angular/core";
import { ActService } from 'src/app/services/act.service';
import { DynamicDialogRef, DynamicDialogConfig, MessageService } from 'primeng/api';
import { Act } from 'src/app/models/act';

@Component({
    selector : 'act-del',
    templateUrl : '../../views/act/act-delete.html',
    providers : [ActService]
})
export class ActDeleteComponent {

    public act : Act;

    constructor (
        private dynamicDialogRef : DynamicDialogRef,
        private dynamicDialogConfig : DynamicDialogConfig,
        private messageService : MessageService,
        private actService : ActService
    ) { 
        this.act = this.dynamicDialogConfig.data.act;
    }

    public delAct() : void {
        this.actService.delAct(this.act.actId).subscribe(
            response => {
                this.dynamicDialogRef.close(this.act);
                this.messageService.add({
                    severity : 'success',
                    summary : 'Info',
                    detail : 'Act was deleted successfully'
                })
            },
            error => console.log("Error deleting act: ", error)
        );
    }

    public cancel() : void {
        this.dynamicDialogRef.close();
        this.messageService.add({
            severity : 'info',
            summary : 'Info',
            detail : 'Act was not deleted'
        });
    }

}