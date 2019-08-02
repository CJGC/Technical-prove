import { Component } from '@angular/core';
import { CommitmentService } from 'src/app/services/commitment.service';
import { Commitment } from 'src/app/models/commitment';
import { Participant } from 'src/app/models/participant';
import { Act } from 'src/app/models/act';
import { DynamicDialogRef, MessageService, DynamicDialogConfig } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector : 'commitment-create',
    templateUrl : '../../views/commitment/commitment-create.html',
    providers : [CommitmentService ]
})
export class CreateCommitmentComponent {

    private _title : string;
    private _subtitle1 : string;
    private _subtitle2 : string
    public act : Act;
    public participant : Participant;
    public commitForm : FormGroup;

    constructor (
        private dynamicDialogRef : DynamicDialogRef,
        private dynamicDialogConf : DynamicDialogConfig,
        private messageService : MessageService,
        private commitmentService : CommitmentService,
        private formBuilder : FormBuilder,
    ) {
        this._title = "Create commitment";
    }

    public ngOnInit() : void {
        this.act = this.dynamicDialogConf.data.act;
        this.participant = this.dynamicDialogConf.data.part;
        this._subtitle1 = "PROJECT'S ACT: " + this.act.project;
        this._subtitle2 = "PARTICIPANT: " + 
            this.participant.name + " " + this.participant.surname;

        this.commitForm = this.formBuilder.group({
            title : ['', [Validators.required]],
            description : ['', [Validators.required]] 
        });
    }

    public createCommitment() : void {
        let commitment : Commitment = <Commitment> this.commitForm.value;
        commitment.act = this.act;
        commitment.participant = this.participant;
        this.commitmentService.createCommitment(commitment).
        subscribe(
            response => {
                this.dynamicDialogRef.close();
                this.messageService.add({
                    severity : 'success',
                    summary : 'Infor',
                    detail : 'the commitment was created succesfully'
                });
            },
            error => console.log("Error creating commitment", error)
        );
    }

    public cancel() : void {
        this.dynamicDialogRef.close();
        this.messageService.add({
            severity : 'info',
            summary : 'Infor',
            detail : 'the commitment creation was cancelled'
        });
    }

    /* Validators messages */
    public title() : any {
        return this.commitForm.get('title');
    }

    public description() : any {
        return this.commitForm.get('description');
    }
}