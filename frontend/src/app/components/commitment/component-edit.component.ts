import { Component } from '@angular/core';
import { CommitmentService } from 'src/app/services/commitment.service';
import { GeneralProvider } from 'src/app/providers/general.provider';
import { Commitment } from 'src/app/models/commitment';
import { Participant } from 'src/app/models/participant';
import { Router } from '@angular/router';

@Component({
    selector : 'commit-edit',
    templateUrl : '../../views/commitment/commitment-edit.html',
    providers : [CommitmentService]
})
export class CommitmentEditComponent {
    private _title : string;
    private _subtitle1 : string;
    public commitment : Commitment;
    public participant : Participant;

    constructor(
        private commitmentService : CommitmentService,
        private generalProvider : GeneralProvider,
        private _router : Router
    ) 
    {
        this.commitment = <Commitment> this.generalProvider.getData().pop();
        this.participant = this.commitment.participant;
        this._title = "Edit " + this.participant.name + " " +
            this.participant.surname + "'s commitment";
        this._subtitle1 = "PROJECT'S ACTA: " + this.commitment.act.project;
            this.participant.surname;
    }

    public editCommitment(url : string) : void {
        this.commitmentService.editCommitment(this.commitment);
        this.generalProvider.clearData();
        this.generalProvider.setData([this.participant]);
        this._router.navigate([url]);
    }

    public saveDataIntoGeneralProvider(url : string) : void {
        this.generalProvider.clearData();
        this.generalProvider.setData([this.participant]);
        this._router.navigate([url]);
    }
}