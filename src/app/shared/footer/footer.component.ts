import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currYear: number = 0;

  getYear() {
    let date = new Date();
    this.currYear = date.getFullYear();
  }

  ngOnInit(): void {
    this.getYear();
  }

}
