import { Component } from '@angular/core';
import { Act } from 'src/app/models/act';
import { ActService } from 'src/app/services/act.service';
import { DynamicDialogRef, MessageService, DynamicDialogConfig } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector : 'act-edit',
    templateUrl : '../../views/act/act-edit.html',
    providers : [ActService]
})
export class ActEditComponent {
    private title : string;
    private act : Act;
    public actForm : FormGroup;

    constructor(
        private dynamicDialogRef : DynamicDialogRef,
        private dynamicDialogConfig : DynamicDialogConfig,
        private messageService : MessageService,
        private formBuilder : FormBuilder,
        private actService : ActService
    )
    {
        this.title = "Edit act";
    }

    ngOnInit() {
        this.act = this.dynamicDialogConfig.data.act;
        
        // defining formulary default data and validations rules
        this.actForm = this.formBuilder.group({
            actId : [this.act.actId, []],
            location : [this.act.location, [Validators.required]],
            project : [this.act.project, [Validators.required]],
            content : [this.act.content, [Validators.required]],
            date : [new Date(this.act.date), [Validators.required]],
            nextMeetingDate : [new Date(this.act.nextMeetingDate), []]
        });
    }

    public editAct() : void {
        this.act = this.actForm.value;
        this.actService.editAct(this.act).subscribe (
            response => {
                this.dynamicDialogRef.close(this.act);
                this.messageService.add({
                    severity : 'success',
                    summary : 'Infor',
                    detail : 'Act was edited successfully'
                });
            },
            error => console.log("Error upgrading act.", error)
        );
    }

    public cancel() : void {
        this.dynamicDialogRef.close();
        this.messageService.add({
            severity : 'info',
            summary : 'Info',
            detail : 'The act edition was cancelled'
        });
    }
 
    /* Validators messages */
    public location () : any {
        return this.actForm.get('location');
    }

    public project () : any {
        return this.actForm.get('project');
    }

    public content () : any {
        return this.actForm.get('content');
    }
    
    public date () : any {
        return this.actForm.get('date');
    }
}