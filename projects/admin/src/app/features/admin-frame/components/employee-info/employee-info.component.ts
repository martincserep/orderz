import { Component, OnInit } from '@angular/core';
import { EmployeeInfo } from './employee-info.interface';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {
  employee: EmployeeInfo = {
    imgUrl: 'https://scontent-lax3-1.cdninstagram.com/v/t51.2885-19/65883707_497716297679254_4459723615864094720_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_ohc=c17hHGtuWOUAX-LyQBM&oh=3fe292bd3c9f942444bbf4cdc6b10f06&oe=5FC6805C',
    name: 'Martin Cserep',
    role: 'Manager'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
