import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../AA_services/produit.service';
import { Produit } from '../AA_classes/produit';

@Component({
  selector: 'app-admin-produit-forms',
  templateUrl: './admin-produit-forms.component.html',
  styleUrls: ['./admin-produit-forms.component.css']
})
export class AdminProduitFormsComponent {
  offreForm!: FormGroup;
  selectedOption!: string;
  isEditMode = false;
  offreId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private pService: ProduitService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
    this.offreId = this.route.snapshot.params['id']
    this.route.params.subscribe((d) => {
      if (d['id']) {
        this.isEditMode = true;
        this.loadOffre(this.offreId);
      }
    }
    )
  }

  loadOffre(id){
    this.pService.getProduitById(id).subscribe(
      (data)=>{
        if(data){
          console.log(data);
          
          this.offreForm.patchValue(data)
        }
      }
    )
  }
  
  onSubmit(){
    const mhData=this.offreForm.value;
    if(this.isEditMode){
      mhData.id=this.offreId;
      this.updateOffre(mhData);
    }else{
      this.addOffre(mhData);
    }
  }

  addOffre(mh:Produit){
    this.pService.addProduit(mh).subscribe(()=>
      this.router.navigate(['/dashboard/OfferList'])
    )
  }

  updateOffre(mh:Produit){
    this.pService.updateProduit(mh).subscribe(()=>{
      this.router.navigate(['/dashboard/OfferList'])
    })
  }

  initForm() {
    this.offreForm = this.fb.group({
      id: [],
      nom: ['', Validators.required],
      description: ['', Validators.required],
      img: ['', [Validators.required, Validators.pattern("^../assets/[a-zA-Z0-9 ^éèàù]+.(jpg|jpeg|png)")]],
      nmbre:[ '',  Validators.required ],
    });
  }
}
