import { Action } from './../Shared/utils/action';
import { Component } from '@angular/core';
import { Development, InProgress, Production, Qa } from '../Shared/utils/Tasks';
import { Task } from '../Shared/Models/Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public readyForDevelopment: any[] = Development;
  public inProgress: Task[] = InProgress;
  public qa: Task[] = Qa;
  public production: Task[] = Production;

  public actions = Action;

  constructor() {}

  filterAction(hide: Array<string>, actions: Array<{key: string, title: string}>): Array<{key: string, title: string}> {
    let newAction = [...actions];
    hide.forEach((v: any) => {
      const index = newAction.findIndex(action => action.title === v);
      if (index !== -1) newAction.splice(index, 1);
    });

    return newAction;
  }

  handleActionClicked(ev: {task: Task, action: {key: string, title: string}}, key: string) {
    const index = this[key].findIndex(action => action.title === ev.task.title);
    if (index !== -1) this[key].splice(index, 1);
    
    this[ev.action.key].unshift(ev.task);
  }
}
