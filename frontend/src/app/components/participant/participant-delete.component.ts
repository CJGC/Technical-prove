import { Component } from "@angular/core";
import { ParticipantService } from 'src/app/services/participant.service';
import { DynamicDialogRef, DynamicDialogConfig, MessageService } from 'primeng/api';
import { Participant } from 'src/app/models/participant';

@Component({
    selector : 'participant-del',
    templateUrl : '../../views/participant/participant-delete.html',
    providers : [ParticipantService]
})
export class ParticipantDeleteComponent {


    constructor (
        private dynamicDialogRef : DynamicDialogRef,
        private dynamicDialogConf : DynamicDialogConfig,
        private messageService : MessageService,
        private participantService : ParticipantService,
    ) 
    { }

    public delParticipant() : void {
        let participant : Participant = this.dynamicDialogConf.data;

        this.participantService.delParticipant(participant.participant_id).
        subscribe(
            response => {
                this.dynamicDialogRef.close(participant);
                this.messageService.add({
                    severity : 'success',
                    summary : 'Info',
                    detail : 'Participant was deleted successfully'
                })
            },
            error => console.log("Error deleting participant: ", error)
        );
    }

    public cancel() : void  {
        this.dynamicDialogRef.close();
        this.messageService.add({
            severity : 'info',
            summary : 'Info',
            detail : 'Participant was not deleted'
        });
    }
}