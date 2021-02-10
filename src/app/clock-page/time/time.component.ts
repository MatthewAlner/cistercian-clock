import { Component, Input, OnInit } from '@angular/core';
import { ITime } from '../../../models/time';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit {
  @Input() time: ITime;

  constructor() {}

  ngOnInit(): void {}
}
