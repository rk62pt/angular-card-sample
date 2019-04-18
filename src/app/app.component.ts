import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconRegistry } from '@angular/material';

export interface Card {
  title: string;
  descp: string;
  data: Info[];
  text: string;
}

export interface Info {
  id: number;
  num: string;
  org: string;
  unit: string;
  aut: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  cards: Card[] = [
    {title: 'Vm7071', descp: '#1', data: [{id:1,num:'num000000001',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000002',org:'abc1234567',unit:'acbc', aut:"讀取"},{id:1,num:'num000000003',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000004',org:'abc1234567',unit:'acbc',aut:"讀寫"},{id:1,num:'num000000005',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000006',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000007',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000008',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000009',org:'abc1234567',unit:'acbc',aut:"寫入"}], text: 'lightblue'},
    {title: 'Vm7072', descp: '#2', data: [{id:1,num:'num000000001',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000002',org:'abc1234567',unit:'acbc', aut:"讀取"},{id:1,num:'num000000003',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000004',org:'abc1234567',unit:'acbc',aut:"讀寫"}], text: 'lightgreen'},
    {title: 'Vm7073', descp: '#3', data: [{id:1,num:'num000000001',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000002',org:'abc1234567',unit:'acbc', aut:"讀取"},{id:1,num:'num000000003',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000004',org:'abc1234567',unit:'acbc',aut:"讀寫"}], text: 'lightpink'},
    {title: 'Vm7074', descp: '#4', data: [{id:1,num:'num000000001',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000002',org:'abc1234567',unit:'acbc', aut:"讀取"},{id:1,num:'num000000003',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000004',org:'abc1234567',unit:'acbc',aut:"讀寫"}], text: '#DDBDF1'},
    {title: 'Vm7075', descp: '#5', data: [{id:1,num:'num000000001',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000002',org:'abc1234567',unit:'acbc', aut:"讀取"},{id:1,num:'num000000003',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000004',org:'abc1234567',unit:'acbc',aut:"讀寫"}], text: '#DDBDF1'},
    {title: 'Vm7076', descp: '#6', data: [{id:1,num:'num000000001',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000002',org:'abc1234567',unit:'acbc', aut:"讀取"},{id:1,num:'num000000003',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000004',org:'abc1234567',unit:'acbc',aut:"讀寫"}], text: '#DDBDF1'},
    {title: 'Vm7077', descp: '#7', data: [{id:1,num:'num000000001',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000002',org:'abc1234567',unit:'acbc', aut:"讀取"},{id:1,num:'num000000003',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000004',org:'abc1234567',unit:'acbc',aut:"讀寫"}], text: '#DDBDF1'},
    {title: 'Vm7078', descp: '#8', data: [{id:1,num:'num000000001',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000002',org:'abc1234567',unit:'acbc', aut:"讀取"},{id:1,num:'num000000003',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000004',org:'abc1234567',unit:'acbc',aut:"讀寫"}], text: '#DDBDF1'},
    {title: 'Vm7079', descp: '#9', data: [{id:1,num:'num000000001',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000002',org:'abc1234567',unit:'acbc', aut:"讀取"},{id:1,num:'num000000003',org:'abc1234567',unit:'acbc',aut:"寫入"},{id:1,num:'num000000004',org:'abc1234567',unit:'acbc',aut:"讀寫"}], text: '#DDBDF1'},
  ];

  constructor(iconRegistry: MatIconRegistry){}
}
