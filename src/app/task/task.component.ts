import { Component, Input, Output } from '@angular/core';
import { Task } from '../Shared/Models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input('title') title: string = '';
  @Input('task') tasks: Task[] = [];
  @Input('actions') actions: Array<string> = [];

  constructor() {
  }

  onActionClicked(task: Task, title: string, action: string): void {
    console.log(task, title, action);
    
  }
}
