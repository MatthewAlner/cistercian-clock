import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-page',
  templateUrl: './key-page.component.html',
  styleUrls: ['./key-page.component.scss'],
})
export class KeyPageComponent implements OnInit {
  public selectedValue: number;
  public initialValue: number;

  constructor() {}

  ngOnInit(): void {
    this.initialValue = new Date().getFullYear();
  }

  public onSelectedValueChanged(selectedValue: number): void {
    if (selectedValue != null) {
      this.selectedValue = selectedValue;
    }
  }
}
