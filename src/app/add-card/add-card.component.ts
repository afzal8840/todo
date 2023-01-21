import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  @Output('onFormSubmit') onFormSubmit = new EventEmitter();

  public  form: FormGroup;
  
  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm()  {
    this.form = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(8)]],
      description: [null, [Validators.required, Validators.maxLength(100)]],
    });
  }

  save() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    const data = {...this.form.value};
    this.form.reset();

    this.onFormSubmit.emit(data);
  }
}
