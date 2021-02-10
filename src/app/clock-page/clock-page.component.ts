import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IDate } from '../../models/date';
import { ITime } from '../../models/time';

@Component({
  selector: 'app-clock-page',
  templateUrl: './clock-page.component.html',
  styleUrls: ['./clock-page.component.scss'],
})
export class ClockPageComponent implements OnInit, OnDestroy {
  public time$: Subject<ITime> = new Subject<ITime>();
  public date$: Subject<IDate> = new Subject<IDate>();
  private componentDestroyed$: Subject<void> = new Subject<void>();
  private ONE_SECOND = 1000;

  constructor() {}

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  ngOnInit(): void {
    timer(0, this.ONE_SECOND)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(() => {
        const d = new Date();
        this.time$.next({
          hours: d.getHours(),
          minutes: d.getMinutes(),
          seconds: d.getSeconds(),
        });

        this.date$.next({
          day: d.getDate(),
          month: d.getMonth() + 1,
          year: d.getFullYear(),
        });
      });
  }
}
