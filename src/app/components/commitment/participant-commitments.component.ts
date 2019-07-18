import { Component } from '@angular/core';
import { CommitmentService } from 'src/app/services/commitment.service';
import { GeneralProvider } from 'src/app/providers/general.provider';
import { Participant } from 'src/app/models/participant';
import { Commitment } from 'src/app/models/commitment';
import { Router } from '@angular/router';

@Component({
    selector : 'part-commitments',
    templateUrl : '../../views/commitment/participant-commitments.html',
    providers : [CommitmentService]
})
export class ParticipantCommitmentsComponent {

    private title : string;
    public participant : Participant;
    public commitments : Array<Commitment>

    constructor (
        private commitmentService : CommitmentService,
        private generalProvider : GeneralProvider,
        private _router : Router
    ) {
        this.participant = <Participant> this.generalProvider.getData().pop();
        this.title = this.participant.name + "'s commitments";
        this.commitmentService.getCommitmentsByParticipantId(
            this.participant.participant_id).
            subscribe(
                partCommit => this.commitments = partCommit, 
                error => console.log("Error getting part commitments: ", error)
            )
    }

    public loadDataIntoGeneralProvider(
        url : string, 
        commitment : Commitment
    ) : void
    {
        this.generalProvider.clearData();
        this.generalProvider.setData([commitment]);
        this._router.navigate([url]);
    }

}