import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ActListComponent } from './components/act/act-list.component';
import { ActShowComponent } from './components/act/act-show.component';
import { MissinWebPageComponent } from './components/errors/missing-webpage.component';
import { AppComponent } from './app.component';
import { ParticipantListComponent } from './components/participant/participant-list.component';
import { ParticipantShowComponent } from './components/participant/participant-show.component';
import { ActParticipantsComponent } from './components/actParticipants/act-participants.component';
import { GetParticipantsFromActaComponent } from './components/commitment/get-participants-from-acta.component';
import { ParticipantCommitmentsComponent } from './components/commitment/participant-commitments.component';
import { CommitmentShowComponent } from './components/commitment/commitment-show.component';
import { CommitmentEditComponent } from './components/commitment/component-edit.component';
import { CommitmentDeleteComponent } from './components/commitment/commitment-delete.component';

const routes: Routes = [
  {path: 'act-list', component: ActListComponent},
  {path: 'act-show/:id', component : ActShowComponent },

  {path: 'participant-list', component: ParticipantListComponent},
  {path: 'participant-show/:id', component : ParticipantShowComponent },

  {path: 'actparticipants', component : ActParticipantsComponent},
  
  {path: 'partfromact/:id', component : GetParticipantsFromActaComponent},

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
