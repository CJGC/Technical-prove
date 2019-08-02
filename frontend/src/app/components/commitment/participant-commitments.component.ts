import { Component } from '@angular/core';
import { CommitmentService } from 'src/app/services/commitment.service';
import { GeneralProvider } from 'src/app/providers/general.provider';
import { Participant } from 'src/app/models/participant';
import { Commitment } from 'src/app/models/commitment';
import { Router, ActivatedRoute } from '@angular/router';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
    selector : 'part-commitments',
    templateUrl : '../../views/commitment/participant-commitments.html',
    providers : [CommitmentService, ParticipantService]
})
export class ParticipantCommitmentsComponent {

    private title : string;
    public participant : Participant;
    public commitments : Array<Commitment>;
    public act_id : number;

    constructor (
        private commitmentService : CommitmentService,
        private participantService : ParticipantService,
        private generalProvider : GeneralProvider,
        private _router : Router,
        private activatedRouter : ActivatedRoute
    ) {

        this.activatedRouter.paramMap.subscribe( param => {
            this.act_id = +param.get("act_id");
            const part_id = +param.get("part_id");
            if (part_id == null || this.act_id == null) {
                console.log("Incorrect argument name")
                return;
            }
            
            this.participantService.getParticipant(part_id).subscribe(
                res => this.participant = res,
                error => console.log("Error getting participant"),
                () => this.loadCommitments()
            );
        });
    }

    public loadCommitments (): void {
        this.title = this.participant.name + "'s commitments";
        this.commitmentService.getCommitmentsByParticipantId(
            this.participant.participant_id).
            subscribe(
                partCommit => this.commitments = partCommit, 
                error => console.log("Error getting part commitments: ", error)
            );
    }

}