import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent  implements OnInit {

  public alertButtons = [
    {
      text: 'Não',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Sim',
      cssClass: 'alert-button-confirm',
    },
  ];

  constructor() { }

  ngOnInit() {}

}
