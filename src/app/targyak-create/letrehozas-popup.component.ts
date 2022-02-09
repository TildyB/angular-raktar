import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TargyakService } from '../targyak.service';

@Component({
  selector: 'app-letrehozas-popup',
  templateUrl: './letrehozas-popup.component.html',
  styleUrls: ['./letrehozas-popup.component.css']
})
export class LetrehozasPopupComponent implements OnInit {

  adatbekuldes: FormGroup;

  constructor(
    private targyak: TargyakService,
    @Inject(MAT_DIALOG_DATA) 
    public data:any
    ) { }

    d = new Date();

  ngOnInit(): void {
    this.adatbekuldes= new FormGroup(
      {'nev': new FormControl(null,Validators.maxLength(50)),
      'hossz' : new FormControl(null,[Validators.min(1),Validators.max(5),Validators.pattern("^[1-5]*$"),Validators.required]),
      'szelesseg': new FormControl(null,[Validators.min(1),Validators.max(5),Validators.pattern("^[1-5]*$"),Validators.required]),
      'datuma': new FormControl(this.d.getFullYear()+'/'+(this.d.getMonth()+1)+'/'+this.d.getDate())
    },
    )
  }

  letrehoz(){
    this.targyak.tablazat.push(this.adatbekuldes.value)
    this.targyak.ujHossz.next(this.adatbekuldes.value.hossz)
    
  }
}
