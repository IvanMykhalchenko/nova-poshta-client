import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerTitle: string = 'Створіть заявку на відправку посилки тут'

  constructor() { }

  ngOnInit(): void {
  }

}
