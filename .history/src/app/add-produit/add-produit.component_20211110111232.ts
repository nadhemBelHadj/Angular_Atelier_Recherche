import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();
  msg : string;
  constructor(private produitService: ProduitService) { }

  addProduit(){
    // console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.msg = "Produit "+ this.newProduit.nomProduit+" ajouté avec succès"
   }

  ngOnInit() {
  }


  
}
