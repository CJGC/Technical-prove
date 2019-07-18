import { Component } from '@angular/core';
import { ParticipantService } from 'src/app/services/participant.service';
import { Participant } from 'src/app/models/participant';
import { GeneralProvider } from 'src/app/providers/general.provider';

@Component ({
    selector : 'participant-show',
    templateUrl : '../../views/participant/participant-show.html',
    providers : [ParticipantService]
})
export class ParticipantShowComponent {
    private title : string;
    private participant : Participant;

    constructor (
        private generalProvider : GeneralProvider,
    ) {
        this.title = "Participant details";
    }

    ngOnInit() {
        this.participant = <Participant> this.generalProvider.getData().pop();
    }

}