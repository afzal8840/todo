import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../Shared/Models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input('key') key: string = '';
  @Input('title') title: string = '';
  @Input('task') tasks: Task[] = [];
  @Input('actions') actions: Array<{key: string, title: string}> = [];

  @Output('onActionClicked') onActionClicked = new EventEmitter();
  @Output('onAddButtonClicked') onAddButtonClicked = new EventEmitter();

  constructor() {
  }

  actionClicked(task: Task, action: {key: string, title: string}): void {
    this.onActionClicked.emit({task, action});
  }

}
