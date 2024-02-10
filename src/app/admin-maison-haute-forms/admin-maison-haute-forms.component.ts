import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaisonHauteService } from '../AA_services/maison-haute.service';
import { MaisonHaute } from '../AA_classes/maison-haute';

@Component({
  selector: 'app-admin-maison-haute-forms',
  templateUrl: './admin-maison-haute-forms.component.html',
  styleUrls: ['./admin-maison-haute-forms.component.css']
})
export class AdminMaisonHauteFormsComponent {
  offreForm!: FormGroup;
  selectedOption!: string;
  isEditMode = false;
  offreId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private mhService: MaisonHauteService,
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
    this.mhService.getMaisonHauteById(id).subscribe(
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

  addOffre(mh:MaisonHaute){
    this.mhService.addMaisonHaute(mh).subscribe(()=>
      this.router.navigate(['/dashboard/OfferList'])
    )
  }

  updateOffre(mh:MaisonHaute){
    this.mhService.updateMaisonHaute(mh).subscribe(()=>{
      this.router.navigate(['/dashboard/OfferList'])
    })
  }

  initForm() {
    this.offreForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required],
      img: ['', [Validators.required, Validators.pattern("^../assets/[a-zA-Z0-9 ^éèàù]+.(jpg|jpeg|png)")]],
      nbPerso:[ '',  Validators.required ],
    });
  }
}
