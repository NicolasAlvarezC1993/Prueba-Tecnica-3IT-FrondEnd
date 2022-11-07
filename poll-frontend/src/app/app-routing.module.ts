import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollAboutComponent } from './poll-about/poll-about.component';
import { PollInputComponent } from './poll-input/poll-input.component'
import { PollResultComponent } from './poll-result/poll-result.component';
import { PollStartComponent } from './poll-start/poll-start.component';

const routes: Routes = [{ path: '',   redirectTo: '/inicio' , pathMatch: 'full'},
                        { path: 'inicio', component:  PollStartComponent},
                        { path: 'encuesta', component:  PollInputComponent},
                        { path: 'resultados', component:  PollResultComponent},
                        { path: 'acerca', component:  PollAboutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
