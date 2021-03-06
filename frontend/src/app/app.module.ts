import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActListComponent } from './components/act/act-list.component';
import { ActShowComponent } from './components/act/act-show.component';
import { MissinWebPageComponent } from './components/errors/missing-webpage.component';
import { ActEditComponent } from './components/act/act-edit.component';
import { ActDeleteComponent } from './components/act/act-delete.component';
import { ParticipantListComponent } from './components/participant/participant-list.component';
import { ParticipantCreateComponent } from './components/participant/participant-create.component';
import { ParticipantShowComponent } from './components/participant/participant-show.component';
import { ParticipantDeleteComponent } from './components/participant/participant-delete.component';
import { ParticipantEditComponent } from './components/participant/participant-edit.component';
import { ActParticipantsComponent } from './components/actParticipants/act-participants.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetParticipantsFromActaComponent } from './components/commitment/get-participants-from-acta.component';
import { CreateCommitmentComponent } from './components/commitment/commitment.create.component';
import { ParticipantCommitmentsComponent } from './components/commitment/participant-commitments.component';
import { CommitmentShowComponent } from './components/commitment/commitment-show.component';
import { CommitmentEditComponent } from './components/commitment/component-edit.component';
import { CommitmentDeleteComponent } from './components/commitment/commitment-delete.component';

import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CreateActComponent } from './components/act/act-create.component';

import { PickListModule } from 'primeng/picklist';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,

    ActListComponent,
    CreateActComponent,
    ActShowComponent,
    ActEditComponent,
    ActDeleteComponent,

    ParticipantListComponent,
    ParticipantCreateComponent,
    ParticipantShowComponent,
    ParticipantEditComponent,
    ParticipantDeleteComponent,

    ActParticipantsComponent,

    GetParticipantsFromActaComponent,
    CreateCommitmentComponent,
    CommitmentShowComponent,
    CommitmentEditComponent,
    CommitmentDeleteComponent,
    ParticipantCommitmentsComponent,

    MissinWebPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PickListModule,
    DataViewModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    DynamicDialogModule,
    TableModule
  ],
  entryComponents : [
    CreateActComponent, 
    ActEditComponent,
    ActDeleteComponent,
    ParticipantCreateComponent,
    ParticipantEditComponent,
    ParticipantDeleteComponent,
    CreateCommitmentComponent,
    CommitmentEditComponent,
    CommitmentDeleteComponent
  ],
  providers: [ MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
