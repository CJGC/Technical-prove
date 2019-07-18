import { Component } from '@angular/core';
import { CommitmentService } from 'src/app/services/commitment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Commitment } from 'src/app/models/commitment';
import { ActService } from 'src/app/services/act.service';
import { ParticipantService } from 'src/app/services/participant.service';
import { Participant } from 'src/app/models/participant';
import { Act } from 'src/app/models/act';
import { GeneralProvider } from 'src/app/providers/general.provider';

@Component({
    selector : 'commitment-create',
    templateUrl : '../../views/commitment/commitment-create.html',
    providers : [CommitmentService, ActService, ParticipantService]
})
export class CreateCommitmentComponent {

    private _title : string;
    private _subtitle1 : string;
    private _subtitle2 : string
    public act : Act;
    public participant : Participant;
    public commitment : Commitment;

    constructor (
        private commitmentService : CommitmentService,
        private generalProvider : GeneralProvider,
        private _router : Router
    ) {
        this._title = "Create commitment";
        this.commitment = new Commitment(0, "", "", null, null);
        this.participant = <Participant> this.generalProvider.getData().pop();
        this.act = <Act> this.generalProvider.getData().pop();
        this._subtitle1 = "PROJECT'S ACT: " + this.act.project;
        this._subtitle2 = "PARTICIPANT: " + this.participant.name + " " +
            this.participant.surname
    }

    public createCommitment() {
        this.commitment.act = this.act;
        this.commitment.participant = this.participant;
        this.commitmentService.createCommitment(this.commitment).
        subscribe(
            response => {
                this.generalProvider.clearData();
                this.generalProvider.setData([this.act]);
                this._router.navigate(['partfromact/']);
            },
            error => console.log("Error creating commitment", error)
        );
    }

    public saveDataIntoGeneralProvider() {
        this.generalProvider.clearData();
        this.generalProvider.setData([this.act]);
        this._router.navigate(['partfromact/']);
    }
}