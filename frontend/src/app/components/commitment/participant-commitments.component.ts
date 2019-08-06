import { Component } from '@angular/core';
import { CommitmentService } from 'src/app/services/commitment.service';
import { Participant } from 'src/app/models/participant';
import { Commitment } from 'src/app/models/commitment';
import { ActivatedRoute } from '@angular/router';
import { ParticipantService } from 'src/app/services/participant.service';
import { DialogService } from 'primeng/api';
import { CommitmentEditComponent } from './component-edit.component';
import { CommitmentDeleteComponent } from './commitment-delete.component';

@Component({
    selector : 'part-commitments',
    templateUrl : '../../views/commitment/participant-commitments.html',
    providers : [CommitmentService, ParticipantService, DialogService]
})
export class ParticipantCommitmentsComponent {

    private title : string;
    public participant : Participant;
    public commitments : Array<Commitment>;
    public act_id : number;

    constructor (
        private commitmentService : CommitmentService,
        private participantService : ParticipantService,
        private dialogService : DialogService,
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
                () => this.getCommitments()
            );
        });
    }

    public getCommitments (): void {
        this.title = this.participant.name + "'s commitments";
        this.commitmentService.getCommitmentsByActAndPartId(this.act_id,
            this.participant.participant_id).
            subscribe(
                partCommit => this.commitments = partCommit, 
                error => console.log("Error getting part commitments: ", error)
            );
    }

    public openDialog(commitment : Commitment, tc : string) : void {
        let targetComponent : any;
        if(tc == "edit")
            targetComponent = CommitmentEditComponent;
        else
            targetComponent = CommitmentDeleteComponent;

        let dialog = this.dialogService.open(
            targetComponent,
            {
                header : tc + ' commitment',
                width : '60%',
                data : {commitment : commitment}
            }
        );

        dialog.onClose.subscribe( 
            response => {if (response != null) this.getCommitments()},
            error => console.log("Error closing dialog", error)
        );
    }

}