import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  constructor() {}
    public mamba = 'xmen';
   public  istrue = true;
    public name = 'Hindi is not a national language';
   public List = ['mamba', 'jamba', 'kamba'];
   corona = 'Virus_corona';
   BlackDeath = 'Plaugeu is coming and';
   @Input() public paser;
   @Output() public eve = new EventEmitter();
  ngOnInit() {

 }
 fireEve() {
  this.eve.emit('Sending text from child to parent');
}
}

