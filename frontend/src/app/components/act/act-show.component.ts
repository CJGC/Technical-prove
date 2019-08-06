import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Act } from 'src/app/models/act';
import { ActivatedRoute } from '@angular/router';
import { ActService } from 'src/app/services/act.service';
import { actParticipantsService } from 'src/app/services/act-participants.service';
import { CommitmentService } from 'src/app/services/commitment.service';
import { ActParticipants } from 'src/app/models/act-participants';
import { Commitment } from 'src/app/models/commitment';
import  * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component ({
    selector : 'act-show',
    templateUrl : '../../views/act/act-show.html',
    styleUrls : ['../../views/act/css/act-show.css'],
    providers : [ActService, actParticipantsService, CommitmentService]
})
export class ActShowComponent implements OnInit {
    private title : string;
    public act : Act;
    public actParticipants : Array<ActParticipants>;
    public commitments : Array<Commitment>;
    
    constructor (
        private activatedRoute : ActivatedRoute,
        private actService : ActService,
        private actParticipantService : actParticipantsService,
        private commmitmentService : CommitmentService,

    ) {
        this.title = "Act details";
    }

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
        this.actParticipants.forEach( actPart => {
            this.commmitmentService.getCommitmentsByActAndPartId(
                this.act.actId, actPart.participants.participant_id).
                subscribe(
                    res => res.forEach( ele => this.commitments.push(ele)),
                    error => console.log("Error getting commitments", error)
                );
        });
    }

    public printAct(id : string) : void {
        window.print();
        
        /* ------ printing document by image ------ */
        
        /*
        const source = document.getElementById(id);
        html2canvas(source).then(canvas => {
            let imgWidth = 208
            let imgHeight = canvas.height * imgWidth / canvas.width;

            const img = canvas.toDataURL('image/png');
            const doc = new jspdf('p', 'mm', 'a4');
            doc.addImage(img, 'JPEG', 0, 0, imgWidth, imgHeight);
        
            doc.autoPrint();
            doc.output("dataurlnewwindow");
        });*/
        

        /* ------ building printing frame ------*/
        /*
        let generator = window.open(",'name,'");
        let layetext = document.getElementById(id);
        generator.document.write(layetext.innerHTML);
        generator.document.close();
        generator.print();
        generator.close();
        */
        
    }

}