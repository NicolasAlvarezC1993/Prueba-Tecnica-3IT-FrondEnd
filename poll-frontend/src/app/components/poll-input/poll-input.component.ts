import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Poll } from '../../models/poll.model';
import { TypeMusic } from '../../models/type-music.model';
import { PollService } from '../../services/poll.service';
import { TypeMusicService } from '../../services/type-music.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-poll-input',
  templateUrl: './poll-input.component.html',
  styleUrls: ['./poll-input.component.css']
})
export class PollInputComponent {

  constructor(private _snackBar: MatSnackBar,
              public pollService: PollService,
              public typeMusicService: TypeMusicService,
              private router: Router){
    this.typeMusicService.getAllTypeMusic().subscribe((resp: any) => {
      this.data = resp;
    }, (err) => {
      this._snackBar.open('Hubo un error al obtener el tipo de musica ','Cerrar', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5*1000
      });
    });
    }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  typeMusicFormControl = new FormControl(0, [Validators.required]);
  matcher = new MyErrorStateMatcher();
  responseCreate:any;
  poll: Poll = new Poll;
  data: TypeMusic[] = [];

  openSnackBar() {
    this.poll.email = this.emailFormControl.value as string
    this.poll.typeMusic = this.typeMusicFormControl.value as number;
    this.pollService.createPoll(this.poll).subscribe((resp: any) => {
      this._snackBar.open('Se envio con exito la encuesta ','Cerrar', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5*1000
      });
    }, (err) => {
      this._snackBar.open('Hubo un error al enviar la encuesta ','Cerrar', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5*1000
      });
    });
    
  }
  gotoStart() {
    this.router.navigate(['/inicio']);
  }
  gotoResult() {
    this.router.navigate(['/resultados']);
  }

}
