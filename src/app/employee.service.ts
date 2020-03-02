import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable, of } from 'rxjs' 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Array<Employee> = [
    {
      id: 1,
      name: "Popo Fernandes"
    },
    {
      id:2,
      name: "John Smith",
      department: "Accounting"
    },
    {
      id: 3,
      name: "Juno",
      department: "HR"
    }
  ]

  constructor() { }

  getEmployees(): Observable<Employee[]>{
    return of(this.employees);
  }
  
  getEmployee(id: number): Employee{
    return this.employees.find(emp => emp.id === id)
  }
}
