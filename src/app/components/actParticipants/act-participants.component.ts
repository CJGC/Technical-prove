import { Component } from '@angular/core';
import { actParticipantsService } from 'src/app/services/act-participants.service';
import { Router } from '@angular/router';
import { ActParticipants } from 'src/app/models/act-participants';
import { Act } from 'src/app/models/act';
import { GeneralProvider } from 'src/app/providers/general.provider';

@Component({
    selector : 'act-participants',
    templateUrl : '../../views/actParticipants/act-participants.html',
    providers : [actParticipantsService]
})
export class ActParticipantsComponent {

    public source : Array<ActParticipants>;
    public target : Array<ActParticipants>;
    private oldTarget : Array<ActParticipants>;
    private act : Act;
    private title : string;

    constructor(
        private actParticipantsService : actParticipantsService,
        private generalProvider : GeneralProvider,
        private _router : Router
    ) {
        this.source = Array<ActParticipants>();
        this.target = Array<ActParticipants>();
        this.oldTarget = Array<ActParticipants>();

        // getting act
        this.act = <Act> this.generalProvider.getData().pop();
        this.title = "PROJECT'S ACT: " + this.act.project;

        // getting availables participants
        this.actParticipantsService.getAvailPartFromActPartiByActId(this.act.actId).
            subscribe(
                availPart => {
                    availPart.forEach( actPart => actPart.act = this.act)
                    this.source = availPart
                },
                error => console.log(
                    "Error getting availables participants: ", error
                )
            );
        
        // getting act's participants
        this.actParticipantsService.getActParticipantsByActId(this.act.actId).
            subscribe(
                actParticipants => this.target = actParticipants,
                error => console.log(
                    "Error getting act's participants: ", error
                ), // saving old target
                () => this.target.forEach( actPart => this.oldTarget.push(actPart))
            );
    }

    public submit () : void {        
        let existingParticipants = Array<ActParticipants>();
        let deletedParticipants = Array<ActParticipants>();
        let newParticipants = Array<ActParticipants>();
        
        // parsing oldTarget state with respect to the new one
        this.oldTarget.forEach(actParticipant => {
            if (this.target.includes(actParticipant))
                existingParticipants.push(actParticipant);
            else
                deletedParticipants.push(actParticipant);
        });

        // getting new participants
        newParticipants = this.target.filter(actParticipant => {
            return !existingParticipants.includes(actParticipant)
        });

        // if exist deleted participants then try to delete them
        // into database
        if (deletedParticipants.length)
            this.actParticipantsService.
                deleteActParticipants(deletedParticipants);

        // if exist new participants then try to add them into database
        if (newParticipants.length)
            this.actParticipantsService.
                addActParticipants(newParticipants);

        // redirecting to the act list page
        this._router.navigate(["/act-list"]);
    }
}