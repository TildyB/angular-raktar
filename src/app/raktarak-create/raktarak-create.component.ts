import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { RaktarakService } from '../raktarak.service';

@Component({
  selector: 'app-raktarak-create',
  templateUrl: './raktarak-create.component.html',
  styleUrls: ['./raktarak-create.component.css']
})
export class RaktarakCreateComponent implements OnInit {

  adatbekuldes: FormGroup;

  opciok = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";

  tokenHossz = 40;

  constructor(
    private raktarak: RaktarakService,
    @Inject(MAT_DIALOG_DATA) 
    public data:any) { }

  raktarId = this.raktarak.raktarakTablazat.length+1;

  // Random token generálás
   randomToken(tokenHossz: number, opciok: string) {
    let text = "";
    for (let i = 0; i < tokenHossz; i++) {
      text += opciok.charAt(Math.floor(Math.random() * opciok.length));
    }
      return text;
  }

  ngOnInit(): void {

    // Raktár létrehozás adatbekérés, és a hozzátartozó plusz értékek
    this.adatbekuldes= new FormGroup(
      {
      'id': new FormControl(this.raktarId),  
      'cim': new FormControl(null,Validators.maxLength(50)),
      'hosszusag' : new FormControl(null,[Validators.min(1),Validators.max(5),Validators.pattern("^[1-5]*$"),Validators.required]),
      'szelesseg': new FormControl(null,[Validators.min(1),Validators.max(5),Validators.pattern("^[1-5]*$"),Validators.required]),
      'token': new FormControl(this.randomToken(this.tokenHossz,this.opciok))
    },) 


  }

  //Létrehozás funkció
  letrehoz(){
    this.raktarak.raktarakTablazat.push(this.adatbekuldes.value)
    this.raktarak.ujRaktarHossz.next(this.adatbekuldes.value.hosszusag)
  }
}
