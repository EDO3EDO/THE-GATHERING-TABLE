import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/Products.service';
import { Subscription } from 'rxjs';
import { Product } from '../../interface/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit ,OnDestroy  {

  constructor(private _ProductsService:ProductsService , private cd:ChangeDetectorRef ) { }





Pro!:Subscription
restrunt:Product[] = []
  ngOnInit() {

this.Pro = this._ProductsService.GetProducts().subscribe({
  next:(pro) => { this.restrunt = pro.recipes , this.cd.detectChanges();},
  error:(err) => {console.log('Error' , err)}

})


  }

  ngOnDestroy(): void {
    this.Pro.unsubscribe()
  }






}
