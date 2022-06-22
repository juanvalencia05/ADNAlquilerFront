import { Component, OnInit } from '@angular/core';
import TrmApi, { TrmApiQuote } from 'trm-api';


@Component({
  selector: 'app-trm',
  templateUrl: './trm.component.html',
  styleUrls: ['./trm.component.css']
})
export class TrmComponent implements OnInit {

  readonly trmApi = new TrmApi();
  public listaTrm: TrmApiQuote[];
  constructor() { }


  ngOnInit(): void {
    this.consultarTrm();
  }

  consultarTrm(){
    this.trmApi
    .history({ limit: 10, order: "DESC" })
    .then((data) => this.listaTrm=data);
  }

 
}
