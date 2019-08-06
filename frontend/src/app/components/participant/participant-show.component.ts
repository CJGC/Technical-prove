import { Component } from '@angular/core';
import { ParticipantService } from 'src/app/services/participant.service';
import { Participant } from 'src/app/models/participant';
import { ActivatedRoute } from '@angular/router';

@Component ({
    selector : 'participant-show',
    templateUrl : '../../views/participant/participant-show.html',
    providers : [ParticipantService]
})
export class ParticipantShowComponent {
    private title : string;
    private participant : Array<Participant>;

    constructor (
        private activatedRouter : ActivatedRoute,
        private participantService : ParticipantService
    ) {
        this.title = "Participant details";
        this.participant = new Array<Participant>();
        this.getParticipants();
    }

    public getParticipants() : void {
        this.activatedRouter.paramMap.subscribe ( param => {
            const part_id = +param.get("id");
            if (part_id == null) {
                console.log("Incorrect argument name");
                return;
            }
            this.participantService.getParticipant(part_id).subscribe (
                res => this.participant.push(res),
                error => console.log("Error getting part: ", error)
            );
        });
    }
}