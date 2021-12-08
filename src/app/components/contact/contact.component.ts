import { Component, OnInit } from '@angular/core';
declare var ymaps:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public map: any;

  constructor() { }

  ngOnInit(): void {
    ymaps.ready().then(()=>{
      this.map = new ymaps.Map('map', {
        center: [44.767009, 65.583457],
        zoom: 12
      });
    })
  }

}
