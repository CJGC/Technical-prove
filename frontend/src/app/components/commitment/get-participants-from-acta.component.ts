import { Component } from '@angular/core';
import { actParticipantsService } from 'src/app/services/act-participants.service';
import { Participant } from 'src/app/models/participant';
import { ActService } from 'src/app/services/act.service';
import { Act } from 'src/app/models/act';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'primeng/api';
import { CreateCommitmentComponent } from './commitment.create.component';

@Component({
    selector : 'get-part-from-acta',
    templateUrl : '../../views/commitment/part-from-act.html',
    providers : [actParticipantsService, ActService, DialogService]
})
export class GetParticipantsFromActaComponent {

    public participants : Array<Participant>;
    public act : Act;
    private title : string;
    private subtitle : string;

    constructor(
        private dialogService : DialogService,
        private activatedRoute : ActivatedRoute,
        private actParticipantsService : actParticipantsService,
        private actProvider : ActService
    ) 
    {
        this.participants = [];
        this.title = "Select desired participant to add a commitment!";

        this.activatedRoute.paramMap.subscribe(param => {
            const actId = +param.get("act_id");
            if (actId == null) {
                console.log("Incorrect argument's name");
                return
            }
            this.actProvider.getAct(actId).subscribe (
                res => this.act = res,
                error => console.log("Error getting act: ", error),
                () => this.getParticipants()
            );                
        });
    }

    public getParticipants() : void {
        this.subtitle = "PROJECT'S ACT: " + this.act.project;
        this.actParticipantsService.getActParticipantsByActId(this.act.actId).
        subscribe (
            actPart => actPart.forEach(
                ele => this.participants.push(ele.participants)
            ),
            error => console.log("Error getting actParticipants", error),
        );
    }

    public openDialog(part : Participant) : void {

        let dialog = this.dialogService.open(
            CreateCommitmentComponent,
            {
                header : ' Create commitment',
                width : '60%',
                data : {act : this.act, part : part}
            }
        );

        dialog.onClose.subscribe( 
            response => { },
            error => console.log("Error closing dialog", error)
        );
    
    }
}