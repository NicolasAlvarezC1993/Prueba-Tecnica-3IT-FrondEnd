import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll-start',
  templateUrl: './poll-start.component.html',
  styleUrls: ['./poll-start.component.css']
})
export class PollStartComponent {

  constructor(private router: Router) { }

  gotoPoll() {
    this.router.navigate(['/encuesta']);
  }
  gotoResult() {
    this.router.navigate(['/resultados']);
  }


}
