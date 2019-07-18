import { Component } from "@angular/core";
import { ParticipantService } from 'src/app/services/participant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector : 'participant-del',
    templateUrl : '../../views/participant/participant-delete.html',
    providers : [ParticipantService]
})
export class ParticipantDeleteComponent {

    constructor (
        private participantService : ParticipantService,
        private activatedRoute : ActivatedRoute,
        private _router : Router
    ) 
    { }

    delParticipant() {
        let id : number;
        this.activatedRoute.params.subscribe(
            params =>  id = parseInt(params['id'],10)
        );
        this.participantService.delParticipant(id).
        subscribe(
            response => this._router.navigate(["/participant-list"]),
            error => console.log("Error deleting participant: ", error)
        );
    }
}