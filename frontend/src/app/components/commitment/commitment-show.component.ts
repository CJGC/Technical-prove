import { Component } from '@angular/core';
import { CommitmentService } from 'src/app/services/commitment.service';
import { Commitment } from 'src/app/models/commitment';
import {  ActivatedRoute } from '@angular/router';

@Component({
    selector : 'commit-show',
    templateUrl : '../../views/commitment/commitment-show.html',
    providers : [CommitmentService]
})
export class CommitmentShowComponent {
    private title : string;
    public commitment : Array<Commitment>;
    public participant_id : number;
    public actId : number;

    constructor(
        private commitmentService : CommitmentService,
        private activatedRoute : ActivatedRoute
    ) 
    {
        this.commitment = Array<Commitment>();
        this.activatedRoute.paramMap.subscribe(param => {
            const commit_id = +param.get("commit_id");

            if (commit_id == null) {
                console.log("Incorrect argument name");
                return;
            }
            
            this.commitmentService.getCommitment(commit_id).subscribe (
                res => this.commitment.push(res),
                error => console.log("Error getting act: ", error),
                () => this.loadExtraInfo()
            );                
        });
    }

    public loadExtraInfo() : void {
        this.participant_id = this.commitment[0].participant.participantId;
        this.actId = this.commitment[0].act.actId;
        this.title = "Show " + this.commitment[0].participant.name + " " +
            this.commitment[0].participant.surname + "'s commitment";
    }

}