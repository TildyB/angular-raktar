import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaktarakService {

  d = new Date();
  ujRaktarHossz = new Subject<number>();
  osszehosszusag:number = 0;

  ujRhossz(){
    return this.ujRaktarHossz
  }


  raktarakTablazat = [
    {id: 1, cim: 'Raktar1', hosszusag: 10, szelesseg: 3, datuma:  this.d.getFullYear()+'/'+(this.d.getMonth()+1)+'/'+this.d.getDate()},
    {id: 2, cim: 'Raktar2', hosszusag: 1, szelesseg: 2, datuma:  this.d.getFullYear()+'/'+(this.d.getMonth()+1)+'/'+this.d.getDate()},
    {id: 3, cim: 'Raktar3', hosszusag: 2, szelesseg: 3, datuma:  this.d.getFullYear()+'/'+(this.d.getMonth()+1)+'/'+this.d.getDate()},
    {id: 4, cim: 'Raktar4', hosszusag: 3, szelesseg: 4, datuma:  this.d.getFullYear()+'/'+(this.d.getMonth()+1)+'/'+this.d.getDate()},
    {id: 5, cim: 'Raktar5', hosszusag: 4, szelesseg: 5, datuma:  this.d.getFullYear()+'/'+(this.d.getMonth()+1)+'/'+this.d.getDate()},

  ];
  constructor() {

    for (const key in this.raktarakTablazat) {

        this.osszehosszusag+= this.raktarakTablazat[key].hosszusag

    
  }

   }
}

