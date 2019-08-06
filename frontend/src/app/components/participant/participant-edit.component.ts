import { Component } from '@angular/core';
import { ParticipantService } from 'src/app/services/participant.service';
import { Participant } from 'src/app/models/participant';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';

@Component({
    selector : 'participant-edit',
    templateUrl : '../../views/participant/participant-edit.html',
    providers : [ParticipantService]
})
export class ParticipantEditComponent {
    private title : string;
    private participant : Participant;
    private partForm : FormGroup;

    constructor(
        private formBuilder : FormBuilder,
        private dynamicDialogRef : DynamicDialogRef,
        private dynamicDialogConf : DynamicDialogConfig,
        private participantService : ParticipantService,
        private messageService : MessageService
    )
    {
        this.title = "Edit participant";
    }

    ngOnInit() {
        this.participant = this.dynamicDialogConf.data.part;

        // defining formulary default data and validations rules
        this.partForm = this.formBuilder.group({
            participant_id : [this.participant.participantId, []],
            name : [this.participant.name, [Validators.required]],
            surname : [this.participant.surname, [Validators.required]],
            email : [this.participant.email, [Validators.required, 
                Validators.email]]
        });
    }

    public editPart() : void {
        this.participant = this.partForm.value;
        this.participantService.editParticipant(this.participant).subscribe (
            response => {
                this.dynamicDialogRef.close(this.participant);
                this.messageService.add({
                    severity : 'success',
                    summary : 'Infor',
                    detail : 'Participant was edited successfully'
                });
            },
            error => console.log("Error upgrading participant.", error)
        );
    }

    public cancel() : void {
        this.dynamicDialogRef.close();
        this.messageService.add({
            severity : 'info',
            summary : 'Info',
            detail : 'The participant edition was cancelled'
        });
    }

    /* Validators messages */
    public name() : any {
        return this.partForm.get('name');
    }

    public surname() : any {
        return this.partForm.get('surname');
    }

    public email() : any {
        return this.partForm.get('email');
    }
}