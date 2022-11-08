import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollInputComponent } from './components/poll-input/poll-input.component';
import { PollResultComponent } from './components/poll-result/poll-result.component';
import { PollAboutComponent } from './components/poll-about/poll-about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PollStartComponent } from './components/poll-start/poll-start.component';
import { PollService } from './services/poll.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from "@angular/material/form-field";
import { TypeMusicService } from './services/type-music.service';


@NgModule({
  declarations: [
    AppComponent,
    PollInputComponent,
    PollResultComponent,
    PollAboutComponent,
    PollStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [PollService, TypeMusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
