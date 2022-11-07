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
import { PollInputComponent } from './poll-input/poll-input.component';
import { PollResultComponent } from './poll-result/poll-result.component';
import { PollAboutComponent } from './poll-about/poll-about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PollStartComponent } from './poll-start/poll-start.component';
import { PollService } from './services/poll.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from "@angular/material/form-field";


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
  providers: [PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
