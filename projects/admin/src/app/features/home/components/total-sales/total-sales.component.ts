import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-sales',
  templateUrl: './total-sales.component.html',
  styleUrls: ['./total-sales.component.scss']
})
export class TotalSalesComponent implements OnInit {

  constructor() { this.data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            borderColor: '#af2d2d',
            backgroundColor: '#af2d2d81'
        },
    ]
};
this.options = {
  title: {
      display: true,
      text: 'Sales',
      fontSize: 16
  },
  legend: {
      position: 'bottom'
  }
};

}

  ngOnInit(): void {
  }

  data: any;
  options: any;
}
