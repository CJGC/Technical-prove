import { Component } from '@angular/core';
import { ParticipantService } from 'src/app/services/participant.service';
import { Participant } from 'src/app/models/participant';
import { GeneralProvider } from 'src/app/providers/general.provider';
import { Router } from '@angular/router';
import { DialogService, MessageService } from 'primeng/api';
import { ParticipantCreateComponent } from './participant-create.component';
import { ParticipantEditComponent } from './participant-edit.component';
import { ParticipantDeleteComponent } from './participant-delete.component';

@Component ({
    selector : 'participant-list',
    templateUrl : '../../views/participant/participant-list.html',
    providers : [ParticipantService, DialogService, MessageService]
})
export class ParticipantListComponent {
    private title : string;
    public participantList : Array<Participant>;

    constructor (
        private _route : Router,
        private generalProvider : GeneralProvider,
        private participantService : ParticipantService,
        private dialogService : DialogService,
        private messageService : MessageService
    )
    {
        this.title = "Participants management";
        this.getParticipants();
    }

    public getParticipants() {
        this.participantService.getParticipantList().
        subscribe(
            part => this.participantList = part,
            error => console.log(error)
        );
    }

    public saveDataIntoGeneralProvider(
        url : string, 
        participant : Participant) 
    {
        this.generalProvider.clearData();
        this.generalProvider.setData([participant]);
        this._route.navigate([url]);
    }

    public openDialog(part : Participant, tc : string) {
        let targetComponent : any;

        if (tc == "create")
            targetComponent = ParticipantCreateComponent;
        else if(tc == "edit")
            targetComponent = ParticipantEditComponent;
        else
            targetComponent = ParticipantDeleteComponent;

        let dialog = this.dialogService.open(
            targetComponent,
            {
                header : tc + ' part',
                width : '60%',
                data : {part : part}
            }
        );

        dialog.onClose.subscribe (
            res => {if(res != null) this.getParticipants()},
            error => console.log("Error closing dialog")
        );
    }
}