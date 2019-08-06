import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { CommitmentService } from 'src/app/services/commitment.service';
import { DynamicDialogConfig, DynamicDialogRef, MessageService } from 'primeng/api';
import { Commitment } from 'src/app/models/commitment';

@Component({
    selector : 'act-del',
    templateUrl : '../../views/commitment/commitment-delete.html',
    providers : [ CommitmentService ]
})
export class CommitmentDeleteComponent {

    private commitment : Commitment;
    
    constructor (
        private dynamicDialogConf : DynamicDialogConfig,
        private dynamicDialogRef : DynamicDialogRef,
        private messageService : MessageService,
        private commitmentService : CommitmentService,
        private activatedRoute : ActivatedRoute,
        private _router : Router
    )
    { 
        this.commitment = <Commitment> this.dynamicDialogConf.data.commitment;
    }

    public delCommitment() : void {
        
        this.commitmentService.delCommitment(this.commitment.commitmentId).
        subscribe(
            res => {
                this.dynamicDialogRef.close(this.commitment);
                this.messageService.add({
                    severity : 'success',
                    summary : 'info',
                    detail : 'Commitment was deleted successfully'
                });
            },
            error => console.log("Commitment was not deleted")
        );
    }

    public cancel() : void {
        this.dynamicDialogRef.close(this.commitment);
        this.messageService.add({
            severity : 'info',
            summary : 'info',
            detail : 'Commitment was not deleted successfully'
        });
    }
}