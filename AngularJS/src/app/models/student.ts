import { Data } from '@angular/router';

export class Student {
  constructor(_id = '', name = '', email = '', phone = 0, date = '' )
  {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.date = date;
  }

  _id: string;
  name: string;
  email: string;
  phone: number;
  date: string;
}
