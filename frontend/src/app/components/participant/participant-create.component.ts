import { Component } from '@angular/core';
import { ParticipantService } from 'src/app/services/participant.service';
import { Participant } from 'src/app/models/participant';
import { DynamicDialogRef, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component ({
    selector : 'participant-create',
    templateUrl : '../../views/participant/participant-create.html',
    providers : [ParticipantService]
})
export class ParticipantCreateComponent {

    public partForm : FormGroup;
    private title : string;

    constructor (
        private formBuilder : FormBuilder,
        private dynamicDialogRef : DynamicDialogRef,
        private messageService : MessageService,
        private participantService : ParticipantService,
    )
    {
        this.title = "Create participant";
        
        // building reactive form with their rules
        this.partForm = this.formBuilder.group({
            name : ['', [Validators.required]],
            surname : ['', [Validators.required]],
            email : ['', [Validators.required, Validators.email]]
        });
    }

    public createPart() : void {
        let participant : Participant = <Participant> this.partForm.value;

        this.participantService.creatParticipant(participant).
        subscribe (
            response => {
                this.dynamicDialogRef.close(participant);
                this.messageService.add({
                    severity : 'success' ,
                    summary : 'Infor',
                    detail :  'Participant was created successfully'
                });
            },
            error => console.log("Error creating participant: ", error) 
        );
    }

    public cancel() : void {
        this.dynamicDialogRef.close();
        this.messageService.add({
            severity : 'info',
            summary : 'Infor',
            detail : 'Participant creation was cancelled'
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