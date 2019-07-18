import { Component } from '@angular/core';
import { ParticipantService } from 'src/app/services/participant.service';
import { Participant } from 'src/app/models/participant';
import { GeneralProvider } from 'src/app/providers/general.provider';
import { Router } from '@angular/router';

@Component ({
    selector : 'participant-list',
    templateUrl : '../../views/participant/participant-list.html',
    providers : [ParticipantService]
})
export class ParticipantListComponent {
    private title : string;
    public participantList : Array<Participant>;

    constructor (
        private _route : Router,
        private generalProvider : GeneralProvider,
        private participantService : ParticipantService,
    )
    {
        this.title = "Participants management";
    }

    ngOnInit() {
        let data : string;
        this.participantService.getParticipantList().
        subscribe(
            part => this.participantList = part,
            error => console.log(error)
        );
    }

    public saveDataIntoGeneralProvider(
        url : string, 
        participant : Participant) 
    {
        this.generalProvider.clearData();
        this.generalProvider.setData([participant]);
        this._route.navigate([url]);
    } 
}