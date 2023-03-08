import { Component, OnInit } from '@angular/core';
import { IBouteille } from '../ibouteille';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-bouteille',
  templateUrl: './bouteille.component.html',
  styleUrls: ['./bouteille.component.scss']
})
export class BouteilleComponent implements OnInit{
  arrayBouteille:Array<IBouteille>;
  
  constructor(public fetchSaq:FetchService){
    this.arrayBouteille = [];
    

  }

 

  ngOnInit(): void {
    this.fetchSaq.getBouteilleSAQ().subscribe((response) => {
      this.arrayBouteille = response.data;
      
      
      
    });
  }


}
