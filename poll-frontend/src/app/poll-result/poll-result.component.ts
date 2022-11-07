import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Graph } from '../models/graph.model';

@Component({
  selector: 'app-poll-result',
  templateUrl: './poll-result.component.html',
  styleUrls: ['./poll-result.component.css']
})
export class PollResultComponent implements OnInit {

  List: Array<Graph> =[];

  public Total=0;
  public MaxHeight= 160;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.List = [
      {value: 350, color:'#5B2C6F', size:'', legend:'Monkeys'},
      {value: 2000, color:'#979A9A', size:'', legend:'Giraffes'},
      {value: 1000, color:'#17202A', size:'', legend:'Lions'},
      {value: 500, color:'#1A5276', size:'', legend:'Tigers'},
    ];
    this.MontarGrafico();
  }

  MontarGrafico(){
    this.List.forEach(element => {
      this.Total += element.value;
    });

    this.List.forEach(element => {
      element.size = Math.round((element.value*this.MaxHeight)/this.Total) + '%';
    });
  }

  gotoStart() {
    this.router.navigate(['/inicio']);
  }
  gotoPoll() {
    this.router.navigate(['/encuesta']);
  }

}
