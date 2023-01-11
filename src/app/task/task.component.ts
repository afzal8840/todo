import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../shared/model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input('tasks') task: any = []
  @Input('title') title: any = []
  @Input('actions') actions: Array<{key: string, title: string}> = []
  @Output('onClickedAction') onClickedAction = new EventEmitter();
  @Output('handleFormSUbmit') handleFormSUbmit = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {}

  actionClicked(task: Task, action: {key: string, title: string}): void {
    this.onClickedAction.emit({task, action})

  }

  onFormSubmit(data: any) {
    this.handleFormSUbmit.emit(data);
  }

}
