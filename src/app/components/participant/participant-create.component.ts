import { Component } from '@angular/core';
import { ParticipantService } from 'src/app/services/participant.service';
import { Participant } from 'src/app/models/participant';
import { Router } from '@angular/router';

@Component ({
    selector : 'participant-create',
    templateUrl : '../../views/participant/participant-create.html',
    providers : [ParticipantService]
})
export class ParticipantCreateComponent {

    private title : string;
    private participant : Participant;

    constructor (
        private participantService : ParticipantService,
        private _router : Router
    ) 
    {
        this.participant = new Participant(0,"","","");
        this.title = "Creating a participant";
    }

    createParticipant() {
        this.participantService.creatParticipant(this.participant).
        subscribe(
            response => this._router.navigate(["/participant-list"]),
            error => console.log("Error creating participant: ", error) 
        )
    }
}