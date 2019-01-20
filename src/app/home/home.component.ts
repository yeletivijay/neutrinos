import { Component, OnInit } from '@angular/core';
import { DServiceService } from '../d-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ds:DServiceService) { }

  compData:any[];

  ngOnInit() {
    this.ds.getCompData().subscribe(x=>this.compData=x)
  }

  updateComp(){
    
  }
  

}
