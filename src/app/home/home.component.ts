import { Component } from '@angular/core';
import { task } from '../shared/model/tasksInterFace';
import {
  Development,
  Production,
  Progress,
  QuesAns,
} from '../shared/utils/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public development: task[] = Development;
  public progress: task[] = Progress;
  public quesAns: task[] = QuesAns;
  public production: task[] = Production;
}
