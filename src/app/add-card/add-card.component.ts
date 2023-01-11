import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  @Output ('handleValue') handleValue = new EventEmitter();

  public taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm() {
    this.taskForm = this.fb.group({
      title: [null,[Validators.required, Validators.minLength(3)]],
      description: [null,[Validators.required, Validators.maxLength(20)]]
    });
  }

  save() {
    this.taskForm.markAllAsTouched()
    if (this.taskForm.invalid) return;

    const data = {...this.taskForm.value};
    this.taskForm.reset();

    this.handleValue.emit(data)
  }
}
