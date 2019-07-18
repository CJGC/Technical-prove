import { Component } from '@angular/core';
import { actParticipantsService } from 'src/app/services/act-participants.service';
import { Participant } from 'src/app/models/participant';
import { GeneralProvider } from 'src/app/providers/general.provider';
import { ActService } from 'src/app/services/act.service';
import { Act } from 'src/app/models/act';
import { Router } from '@angular/router';

@Component({
    selector : 'get-part-from-acta',
    templateUrl : '../../views/commitment/part-from-act.html',
    providers : [actParticipantsService, ActService]
})
export class GetParticipantsFromActaComponent {

    public participants : Array<Participant>;
    public act : Act;
    private title : string;
    private subtitle : string;

    constructor(
        private _router : Router,
        private actParticipantsService : actParticipantsService,
        private generalProvider : GeneralProvider
    ) 
    {
        this.participants = [];
        this.title = "Select desired participant to add a commitment!";
        this.act = <Act> this.generalProvider.getData().pop();
        this.subtitle = "PROJECT'S ACT: " + this.act.project;
        this.actParticipantsService.getActParticipantsByActId(this.act.actId).
            subscribe (
                actPart => actPart.forEach(
                    ele => this.participants.push(ele.participants)
                ),
                error => console.log("Error getting actParticipants", error),
            );
    }

    public saveIntoGeneralProvider(
        url : string, 
        participant : Participant
    ) : void {
        this.generalProvider.clearData();
        this.generalProvider.setData([this.act, participant]);
        this._router.navigate([url]);
    }
}