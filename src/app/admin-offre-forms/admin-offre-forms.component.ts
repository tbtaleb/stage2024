import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-offre-forms',
  templateUrl: './admin-offre-forms.component.html',
  styleUrls: ['./admin-offre-forms.component.css']
})
export class AdminOffreFormsComponent {
  offreForm!: FormGroup;
  selectedOption!: string;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();
    ;
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
      photo: ['', [Validators.required,Validators.pattern("^../assets/[a-zA-Z0-9 ^éèàù]+.(jpg|jpeg|png)")]],
    });
  }
}
