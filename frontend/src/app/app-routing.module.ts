import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ActListComponent } from './components/act/act-list.component';
import { ActShowComponent } from './components/act/act-show.component';
import { MissinWebPageComponent } from './components/errors/missing-webpage.component';
import { AppComponent } from './app.component';
import { ActEditComponent } from './components/act/act-edit.component';
import { ActDeleteComponent } from './components/act/act-delete.component';
import { ParticipantListComponent } from './components/participant/participant-list.component';
import { ParticipantCreateComponent } from './components/participant/participant-create.component';
import { ParticipantShowComponent } from './components/participant/participant-show.component';
import { ParticipantDeleteComponent } from './components/participant/participant-delete.component';
import { ParticipantEditComponent } from './components/participant/participant-edit.component';
import { ActParticipantsComponent } from './components/actParticipants/act-participants.component';
import { GetParticipantsFromActaComponent } from './components/commitment/get-participants-from-acta.component';
import { CreateCommitmentComponent } from './components/commitment/commitment.create.component';
import { ParticipantCommitmentsComponent } from './components/commitment/participant-commitments.component';
import { CommitmentShowComponent } from './components/commitment/commitment-show.component';
import { CommitmentEditComponent } from './components/commitment/component-edit.component';
import { CommitmentDeleteComponent } from './components/commitment/commitment-delete.component';

const routes: Routes = [
  {path: 'act-list', component: ActListComponent},
  {path: 'act-show', component : ActShowComponent },
  {path: 'act-delete/:id', component : ActDeleteComponent},

  {path: 'participant-list', component: ParticipantListComponent},
  {path: 'participant-create', component : ParticipantCreateComponent },
  {path: 'participant-show', component : ParticipantShowComponent },
  {path: 'participant-edit', component : ParticipantEditComponent},
  {path: 'participant-delete/:id', component : ParticipantDeleteComponent},

  {path: 'actparticipants', component : ActParticipantsComponent},
  
  {path: 'partfromact', component : GetParticipantsFromActaComponent},
  {path: 'create-commitment', 
    component : CreateCommitmentComponent},
  {path: 'partcommitments', component : ParticipantCommitmentsComponent},
  {path: 'commitment-show', component : CommitmentShowComponent},
  {path: 'commitment-edit', component : CommitmentEditComponent},
  {path: 'commitment-delete/:id', component : CommitmentDeleteComponent},
  {path: '', component : ActListComponent },
  {path: '**', component : MissinWebPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
