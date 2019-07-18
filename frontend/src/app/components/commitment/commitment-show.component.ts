import { Component } from '@angular/core';
import { CommitmentService } from 'src/app/services/commitment.service';
import { GeneralProvider } from 'src/app/providers/general.provider';
import { Commitment } from 'src/app/models/commitment';
import { Participant } from 'src/app/models/participant';
import { Router } from '@angular/router';

@Component({
    selector : 'commit-show',
    templateUrl : '../../views/commitment/commitment-show.html',
    providers : [CommitmentService]
})
export class CommitmentShowComponent {
    private title : string;
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
        this.title = "Show " + this.participant.name + " " +
            this.participant.surname + "'s commitment";
    }

    public loadDataIntoGeneralProvider(url : string) : void {
        this.generalProvider.clearData();
        this.generalProvider.setData([this.participant]);
        this._router.navigate([url]);
    }
}