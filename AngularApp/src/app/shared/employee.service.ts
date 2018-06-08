import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Employee} from './employee.model';

@Injectable()
export class EmployeeService {
  selectedEmployee:Employee;
  employees:Employee[];
  readonly BaseURL = 'http://localhost:3000/employee';
  constructor(private http :HttpClient) { }
  postEmployee(emp: Employee){
      // 1 - URL
      // 2 - Body
      return this.http.post(this.BaseURL,emp);  
  }
  getEmployeeList(){
    return this.http.get(this.BaseURL);
  }
  putEmployee(emp:Employee){
    // 1 - URL
    // 2 - Body
    return this.http.put(this.BaseURL+`/${emp._id}`,emp);
  }
  deleteEmployee(_id:string){
     return this.http.delete(this.BaseURL+`/${_id}`); 
  }
}
