import { NewCard } from './../Shared/utils/Tasks';
import { Action } from './../Shared/utils/action';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Development, InProgress, Production, Qa } from '../Shared/utils/Tasks';
import { Task } from '../Shared/Models/Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('addModalButton') addModalButton: ElementRef;
  @ViewChild('closeModalButton') closeModalButton: ElementRef;
  
  public readyForDevelopment: any[] = Development;
  public inProgress: Task[] = InProgress;
  public qa: Task[] = Qa;
  public production: Task[] = Production;
  public newCard: Task[] = NewCard;

  public actions = Action;
  public currentState: string;

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
    
    this[ev.action.key].push(ev.task);
  }

  openAddModal(state: string) {
    this.currentState = state;
    this.addModalButton.nativeElement.click();
  }

  addTask(ev) {
    this.closeModalButton.nativeElement.click();
    this[this.currentState].push(ev);
  }
}
