import { IEmployee } from './iemployee';

export class Employee implements IEmployee {
  id: number | null;
  name: string;
  address: string;
  city: string;
  role: string;

  // @ts-ignore
  constructor(id: number | null, name: string, address: string, city: string, role: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.city = city;
    this.role = role;
  }
}
