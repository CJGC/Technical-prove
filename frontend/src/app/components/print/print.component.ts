import { Component, OnInit } from '@angular/core';
import { ActService } from 'src/app/services/act.service';
import { actParticipantsService } from 'src/app/services/act-participants.service';
import { Act } from 'src/app/models/act';
import { ActivatedRoute } from '@angular/router';
import { Commitment } from 'src/app/models/commitment';
import { ActParticipants } from 'src/app/models/act-participants';
import { CommitmentService } from 'src/app/services/commitment.service';

@Component({
    selector : 'print',
    templateUrl : '../../views/print/print.html',
    providers : [ ActService, actParticipantsService, CommitmentService]
})
export class PrintComponent implements OnInit {

    public act : Act;
    public actParticipants : Array<ActParticipants>;
    public commitments : Array<Commitment>;

    constructor (
        private actService : ActService,
        private actParticipantService : actParticipantsService,
        private commmitmentService : CommitmentService,
        private activatedRoute : ActivatedRoute
    ) { }

    ngOnInit() {
        this.actParticipants = Array<ActParticipants>();
        this.commitments = Array<Commitment>();

        // --------- First getting act info ---------
        let actId : number;
        this.activatedRoute.paramMap.subscribe(
            para => actId = + para.get('act_id'),
            error => console.log("Invalid url argument", error)
        );

        this.actService.getAct(actId).subscribe(
            res => this.act = res,
            error => console.log("Error getting act", error),
            () => this.getParticipants()
        );
    }

    public getParticipants() : void {
        // --------- Second getting participants ---------
        this.actParticipantService.getActParticipantsByActId(this.act.actId).
        subscribe(
            res => this.actParticipants = res,
            error => console.log("Error getting participants", error),
            () => {if(this.actParticipants) this.getCommitments()}
        );
    }

    public getCommitments() : void {
        // --------- Third getting commitments ---------
        console.log(this.actParticipants);
        this.actParticipants.forEach( actPart => {

            console.log(this.act.actId);
            console.log(actPart.participants.participant_id);
            this.commmitmentService.getCommitmentsByActAndPartId(
                this.act.actId, actPart.participants.participant_id).
                subscribe(
                    res => {
                        console.log(res);
                        res.forEach( ele => this.commitments.push(ele));
                    },
                    error => console.log("Error getting commitments", error)
                );
        });
    }
}