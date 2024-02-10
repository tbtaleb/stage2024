import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-offre-forms',
  templateUrl: './admin-offre-forms.component.html',
  styleUrls: ['./admin-offre-forms.component.css']
})
export class AdminOffreFormsComponent {
  offreForm!: FormGroup;
  selectedOption!: string;
  isEditMode = false;
  offreId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
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
    
  }

  onChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedOption = target.value;
  }

  initForm() {
    this.offreForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required],
      photo: ['', [Validators.required, Validators.pattern("^../assets/[a-zA-Z0-9 ^éèàù]+.(jpg|jpeg|png)")]],
    });
  }
}
