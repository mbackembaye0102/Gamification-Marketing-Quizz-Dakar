import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aview',
  templateUrl: './aview.component.html',
  styleUrls: ['./aview.component.scss']
})
export class AViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  part1=0;
  part2=0;
  part3=0;
  part4=0;

  partie2(){
    this.part2++;
  }
  partie3(){
    this.part3++;
  }
  partie4(){
    this.part4++;
  }
}
