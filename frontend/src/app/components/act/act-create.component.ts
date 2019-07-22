import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Act } from 'src/app/models/act';
import { ActService } from 'src/app/services/act.service';

@Component({
  selector: 'create-act',
  templateUrl: '../../views/act/act-create.html',
  providers : [ActService]
})
export class CreateActComponent implements OnInit {

  public actForm : FormGroup;
  
  constructor(
      private dynamicDialogRef : DynamicDialogRef,
      private messageService : MessageService,
      private formBuilder : FormBuilder,
      private actService : ActService,
    ) 
    { }

  ngOnInit() {
    
    // defining formulary default data and validations rules
    this.actForm = this.formBuilder.group({
        actId : ['', []],
        location : ['', [Validators.required]],
        project : ['', [Validators.required]],
        content : ['', [Validators.required]],
        date : ['', [Validators.required]],
        nextMeetingDate : ['', []]
    });
  }

  public createAct() {
    let act = <Act> this.actForm.value;
    
    this.actService.creatAct(act).subscribe(
      response => {
          this.dynamicDialogRef.close(act);
          this.messageService.add({
              severity : 'success',
              summary : 'Infor',
              detail : 'Act was created successfully'
          });
      },
      error => console.log("Error creating act: ", error)
    );
  }

  public cancel() {
    this.dynamicDialogRef.close();
    this.messageService.add({
      severity : 'info',
      summary : 'Info',
      detail : 'The act creation was cancelled'
    });
  }
}
