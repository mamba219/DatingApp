import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

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
