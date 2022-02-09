import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TargyakService {

  d = new Date();

  ujHossz =new Subject<number>();
  osszesHossz:number =0;

  ujhossz(){
    return this.ujHossz
  }

  tablazat = [
    {nev: 'Cipő', hossz: 23, datuma:  this.d.getFullYear()+'/'+(this.d.getMonth()+1)+'/'+this.d.getDate()},
    {nev: 'asztal', hossz: 11, datuma: this.d.getFullYear()+'/'+(this.d.getMonth()+1)+'/'+this.d.getDate()},
    {nev: 'szek', hossz: 10, datuma:this.d.getFullYear()+'/'+(this.d.getMonth()+1)+'/'+this.d.getDate()},
    {nev: 'pohar', hossz: 6, datuma: this.d.getFullYear()+'/'+(this.d.getMonth()+1)+'/'+this.d.getDate()},
    {nev: 'labda', hossz: 23, datuma: this.d.getFullYear()+'/'+(this.d.getMonth()+1)+'/'+this.d.getDate()},
    {nev: 'kormany', hossz: 23, datuma: this.d.getFullYear()+'/'+(this.d.getMonth()+1)+'/'+this.d.getDate()},
    {nev: 'egér', hossz: 2, datuma: this.d.getFullYear()+'/'+(this.d.getMonth()+1)+'/'+this.d.getDate()},
  ];

  constructor() {

    for (const key in this.tablazat) {
        this.osszesHossz += this.tablazat[key].hossz
    }

   }

}
