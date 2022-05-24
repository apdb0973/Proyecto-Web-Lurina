import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../Item.model';
import { ItemService } from '../Item.service';

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  Item: Item={};
  
  IdItem:         number=0;


  constructor(protected route: ActivatedRoute, private servicioItem:ItemService) { }

  
  ngOnInit(): void {

    let sfd: Item;

    if (this.route.snapshot.params['itemid']) {

          this.IdItem = this.route.snapshot.params['itemid']
          
          console.log(this.IdItem);
    }
          
    this.servicioItem.obtenerItem(this.IdItem).subscribe(resultado=>{

      this.Item = resultado;


    });
    
  }

}
