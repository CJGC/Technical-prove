import { Component } from '@angular/core';
import { CommitmentService } from 'src/app/services/commitment.service';
import { GeneralProvider } from 'src/app/providers/general.provider';
import { Commitment } from 'src/app/models/commitment';
import { Participant } from 'src/app/models/participant';
import { Router } from '@angular/router';
import { DynamicDialogRef, DynamicDialogConfig, MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Act } from 'src/app/models/act';

@Component({
    selector : 'commit-edit',
    templateUrl : '../../views/commitment/commitment-edit.html',
    providers : [CommitmentService]
})
export class CommitmentEditComponent {
    private _title : string;
    private _subtitle1 : string;
    public commitForm : FormGroup;

    constructor(
        private dynamicDialogRef : DynamicDialogRef,
        private dynamicDialogConf : DynamicDialogConfig,
        private messageService : MessageService,
        private commitmentService : CommitmentService,
        private formBuilder : FormBuilder
    ) 
    {
        let commitment = <Commitment> this.dynamicDialogConf.data.commitment;
        this.commitForm = this.formBuilder.group({
            commitment_id : [commitment.commitment_id, []],
            title : [commitment.title, [Validators.required]],
            description : [commitment.description, [Validators.required]],
            act : [commitment.act, []],
            participant : [commitment.participant, []]
        });

        this._title = "Edit " + commitment.participant.name + " " +
            commitment.participant.surname + "'s commitment";

        this._subtitle1 = "PROJECT'S ACTA: " + commitment.act.project + " "
            commitment.participant.name+ " " +commitment.participant.surname;
    }

    public editCommitment(url : string) : void {
        let commitment : Commitment = <Commitment> this.commitForm.value;

        this.commitmentService.editCommitment(commitment).subscribe(
            res => {
                this.dynamicDialogRef.close(commitment);
                this.messageService.add({
                    severity : 'success',
                    summary : 'info',
                    detail : 'Commitment was edited succesfully'
                });
            },
            error => console.log("Error updating commitment", error)
        );
        
    }

    public cancel() : void {
        this.dynamicDialogRef.close();
        this.messageService.add({
            severity : 'info',
            summary : 'info',
            detail : 'Commitment edition was cancelled'
        });
    }

}