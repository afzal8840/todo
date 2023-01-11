import { Component } from '@angular/core';
import { Task } from '../shared/model/task';
import { Action } from '../shared/utils/board';
import { developement, progress, Qa, production } from '../shared/utils/tasks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public developement: any[] = developement
  public progress: Task[] = progress
  public qA: Task[] = Qa
  public production: Task[] = production

  public actions = Action;
  
  constructor() {}

  filterAction(hidden: Array<string>): Array<{key: string, title: string}> {
    let newAction = [...this.actions]; // spread operator
    hidden.forEach((v: any) => {
      const index = newAction.findIndex(action => action.title === v);
      if (index !== -1) newAction.splice(index, 1);
    });

    return newAction
  }

  handleAction(ev: {task: Task, action: {key: string, title: string}}, key: string) {
    const index = (this[key as keyof HomeComponent] as Task[]).findIndex(action => action.title === ev.task.title);
    if( index !== -1) (this[key as keyof HomeComponent] as Task[]).splice(index, 1);

    (this[ev.action.key as keyof HomeComponent] as Task[]).push(ev.task);
  }

  addTAsk(ev: any, key: string) {
    console.log(ev,key);
    

  }
}
