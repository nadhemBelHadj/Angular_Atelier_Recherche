import { ProduitService } from './../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {

  produits : Produit[] =[]; //un tableau de Produit
  categories : Categorie[];
  IdCategorie : number;

  constructor(private produitService: ProduitService ) {
   // this.produits = produitService.listeProduits();
   }

  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
  }

  onChange() {
   // console.log(this.IdCategorie);
    this.produits =  this.produitService.rechercherParCategorie(this.IdCategorie);
    console.log(this.produits);
    
    }

}
