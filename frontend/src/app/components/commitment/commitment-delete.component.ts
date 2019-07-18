import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { CommitmentService } from 'src/app/services/commitment.service';
import { GeneralProvider } from 'src/app/providers/general.provider';
import { Participant } from 'src/app/models/participant';

@Component({
    selector : 'act-del',
    templateUrl : '../../views/commitment/commitment-delete.html',
    providers : [CommitmentService]
})
export class CommitmentDeleteComponent {

    private participant : Participant;
    
    constructor (
        private commitmentService : CommitmentService,
        private activatedRoute : ActivatedRoute,
        private _router : Router,
        private generalProvider : GeneralProvider
    ) 
    { 
        this.participant = this.generalProvider.getData().pop().participant;
    }

    public delCommitment() : void {
        let id : number;
        this.activatedRoute.params.subscribe(
            params =>  id = parseInt(params['id'],10)
        );
        this.commitmentService.delCommitment(id);
        this.generalProvider.clearData();
        this.generalProvider.setData([this.participant]);
        this._router.navigate(["../partcommitments"]);
    }

    public saveDataIntoGeneralProvider() {
        this.generalProvider.clearData();
        this.generalProvider.setData([this.participant]);
        this._router.navigate(["../partcommitments"]);
    }
}