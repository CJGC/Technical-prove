import { Component } from '@angular/core';
import { ParticipantService } from 'src/app/services/participant.service';
import { Participant } from 'src/app/models/participant';
import { Router } from '@angular/router';
import { GeneralProvider } from 'src/app/providers/general.provider';

@Component({
    selector : 'participant-edit',
    templateUrl : '../../views/participant/participant-edit.html',
    providers : [ParticipantService]
})
export class ParticipantEditComponent {
    private title : string;
    private participant : Participant;

    constructor(
        private participantService : ParticipantService,
        private generalProvider : GeneralProvider,
        private _route : Router
    )
    {
        this.title = "Edit participant";
    }

    ngOnInit() {
        this.participant = <Participant> this.generalProvider.getData().pop();
    }

    editParticipant() {
        this.participantService.editParticipant(this.participant).
        subscribe(
            response => this._route.navigate(['/participant-list']),
            error => console.log("Error editing participant: ", error)
        );
    }

}