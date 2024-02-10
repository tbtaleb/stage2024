import { Component, Type } from '@angular/core';
import { Devis } from '../../classes/devis';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DevisService } from '../../services/devis.service';
import { ProduitService } from 'src/app/AA_services/produit.service';
import { Produit } from 'src/app/AA_classes/produit';
import { Category } from '../../enum/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  devis: Devis[] = [];
  products: Produit[] = [];
  choices = Object.values(Category);
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private devisService: DevisService,
    private productService: ProduitService,
    private router:Router
    
  ) {}

  ngOnInit(): void {
    this.form = this.fb.nonNullable.group({
      societe: this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: [
          '',
          [
            Validators.minLength(8),
            Validators.required,
            Validators.pattern('^[0-9]*$'),
          ],
        ],
      }),
      chosenHouses: this.fb.array([]),
      chosenProducts: this.fb.array([]),
      chosenTeamB: this.fb.group({
        categorie: [Category.Sportif],
        activite: [],
      }),
      chosenActivityRebois: this.fb.group({
        nbreTree: [],
        price: [],
      }),
    });

    this.productService.getAllProduit().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.devisService.addDevis(this.form.value).subscribe();
     if (confirm('Demende envoyer')) {
       this.router.navigate(['/acceuil']);
     }
  }

  onVider() {
    this.form.reset();
    this.Products.clear();
    this.Houses.clear();
  }

  onAddProduct() {
    this.Products.push(
      this.fb.group({
        name: [],
        quantite: [0],
      })
    );
  }

  onDeleteProducts(index: number) {
    this.Products.removeAt(index);
  }

  public get Products(): FormArray {
    return this.form.get('chosenProducts') as FormArray;
  }

  onAddHouses() {
    this.Houses.push(
      this.fb.group({
        place: [],
        date: [],
        duree: [0],
      })
    );
  }

  onDeleteHouses(index: number) {
    this.Houses.removeAt(index);
  }

  public get Houses(): FormArray {
    return this.form.get('chosenHouses') as FormArray;
  }

  //----------------------------------------------------------------
  isAdditionalContentVisible: boolean = false;

  toggleAdditionalContent(): void {
    this.isAdditionalContentVisible = !this.isAdditionalContentVisible;
  }

  isAdditionalContentVisible2: boolean = false;

  toggleAdditionalContent2(): void {
    this.isAdditionalContentVisible2 = !this.isAdditionalContentVisible2;
  }

  isAdditionalContentVisible3: boolean = false;

  toggleAdditionalContent3(): void {
    this.isAdditionalContentVisible3 = !this.isAdditionalContentVisible3;
  }

  isAdditionalContentVisible4: boolean = false;

  toggleAdditionalContent4(): void {
    this.isAdditionalContentVisible4 = !this.isAdditionalContentVisible4;
  }

  
}
