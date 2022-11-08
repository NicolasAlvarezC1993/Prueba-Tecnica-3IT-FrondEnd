import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Poll } from 'src/app/models/poll.model';
import { TypeMusic } from 'src/app/models/type-music.model';
import { PollService } from 'src/app/services/poll.service';
import { TypeMusicService } from 'src/app/services/type-music.service';
import { Graph } from '../../models/graph.model';

@Component({
  selector: 'app-poll-result',
  templateUrl: './poll-result.component.html',
  styleUrls: ['./poll-result.component.css']
})
export class PollResultComponent {

  List: Array<Graph> =[];
  dataMusic: TypeMusic[] = [];
  dataPoll: Poll[] = [];

  public Total=0;
  public MaxHeight= 160;

  constructor(private router: Router,
              private pollService:PollService,
              private typeMusicService:TypeMusicService,
              private _snackBar: MatSnackBar){

    this.pollService.getAllPoll().subscribe((resp: any) => {
      this.dataPoll = resp;
      this.typeMusicService.getAllTypeMusic().subscribe((response: any) => {
        this.dataMusic = response;
        console.log(this.dataMusic)
        for(let music of this.dataMusic){
          let value = this.dataPoll.filter(poll => poll.typeMusic === music.id).length;
          console.log(value);
          let graph:Graph = new Graph();
          graph.value = value;
          graph.legend = music.name;
          graph.size = '';
          graph.color = '#483D8B';
          this.List.push(graph)
        }
        this.MontarGrafico();
      }, (err) => {
        this._snackBar.open('Hubo un error al obtener el tipo de musica ','Cerrar', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5*1000
        });
      });
    }, (err) => {
      this._snackBar.open('Hubo un error al obtener resultados de encuestas ','Cerrar', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5*1000
      });
    });

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
