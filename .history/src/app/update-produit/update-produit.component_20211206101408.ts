import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: []
})
export class UpdateProduitComponent implements OnInit {
  currentProduit  = new Produit();
  categories : Categorie[];
 
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private produitService: ProduitService) {               
              }

  ngOnInit() {
      this.categories = this.produitService.listeCategories();
      this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot.params.id); 
  }

  updateProduit()
  { //console.log(this.currentProduit);
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
   }

}
