import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RaktarakCreateComponent } from '../raktarak-create/raktarak-create.component';
import { MatPaginator } from '@angular/material/paginator';
import { RaktarakService } from '../raktarak.service';
import { RaktarakDeleteComponent } from '../raktarak-delete/raktarak-delete.component';
import { RaktarakEditComponent } from '../raktarak-edit/raktarak-edit.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PostsService } from '../posts.service';
import { TargyakService } from '../targyak.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-raktarak',
  templateUrl: './raktarak.component.html',
  styleUrls: ['./raktarak.component.css']
})
export class RaktarakComponent implements OnInit {

  title = 'material';

  @ViewChild(MatPaginator) paginator: MatPaginator;

  Rhossz : Subscription;
  megfelelo:string;
  osztaly: Subscription;

  TargyakOsszesHossz = this.targyak.osszesHossz;
  RaktarOsszesHossz = this.raktarak.osszehosszusag;

  constructor(
    private dialogus: MatDialog,
    private raktarak:RaktarakService,
    private targyak: TargyakService,
    private _snackBar: MatSnackBar,
    private posts: PostsService){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  displayedColumns: string[] = ['id','neve', 'hossza','szelesseg', 'actions'];

  dataSource = new MatTableDataSource(this.raktarak.raktarakTablazat);

  admin = this.posts.isAdmin;

  ngOnInit() {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.cim.toLowerCase().includes(filter)
    };
      // A raktárak össz hosszúságát ellenőrzi, hogy a lenti teglalap betöltés nélkül is változzon. 

    this.Rhossz =this.raktarak.ujRhossz().subscribe(adat =>{
      this.raktarak.osszehosszusag +=adat;
      console.log(this.raktarak.osszehosszusag)
      if(this.raktarak.osszehosszusag-this.targyak.osszesHossz >0){
        this.megfelelo= "befer";
      }else{
        this.megfelelo ="nemFerBe"
      }
    })

    this.befer();

 
  }

  ngOnDestroy() {
    this.Rhossz.unsubscribe();
  }

// Filter funkció
  filtering(FilterErtek:String){
    this.dataSource.filter = FilterErtek.trim().toLocaleLowerCase();
    console.log(this.dataSource)
  }

// Törlés funkció
  torles(x:any){
      let dialog = this.dialogus.open(RaktarakDeleteComponent,{data:x})
      dialog.afterClosed().subscribe(result => {
      this.dataSource.data = this.raktarak.raktarakTablazat})
  }

// Szerkesztés funkció
  szerkesztes(y:any,z:any){
    let dialog = this.dialogus.open(RaktarakEditComponent, {data:{datakey: y,datakey2:z}})
    dialog.afterClosed().subscribe(result => {
        if(result){
          console.log(result)
          console.log(this.dataSource.data)
          this.dataSource.data[z] =result;
          this.dataSource._updateChangeSubscription();
        } 
    })
  }
  
// Raktár létrehozás funkció
  letrehozas(){
    let dialog =this.dialogus.open(RaktarakCreateComponent);
    dialog.afterClosed().subscribe(result => {
      if(result){
        this.dataSource.data = this.raktarak.raktarakTablazat
        this._snackBar.open('Sikeres Mentés','Mégse',{duration: 2000})
      }
    })
  }
  
  openSnackBar(message: string) {
    this._snackBar.open(message)
  }
  befer(){
    if(this.RaktarOsszesHossz-this.TargyakOsszesHossz>0){
      this.megfelelo = "befer"
    }else{
      this.megfelelo = "nemFerBe"
    }
  }



}
