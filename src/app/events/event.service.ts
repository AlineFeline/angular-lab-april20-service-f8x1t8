import { Injectable } from '@angular/core';
import { IEvent } from './event';

@Injectable({
    providedIn: 'root'
})


export class EventService {

  getEvent(): IEvent[]{

  return [
  {
    "name": "AngularConnect",
    "date": "9/26/2036",
    "price": 200.00,
    "location": "London, United Kingdom",
    "onlineUrl": "https://www.ng-conf.org/"
  },
  {
      "name": "ng-japan", 
      "date": "4/15/2020", 
      "price": 225.00, 
      "location": "Tokyo, Japan",
      "onlineUrl": ""
  },
  {
        "name": "ng-conf 2037", 
        "date": "1/15/2020", 
        "price": 190.99, 
        "location": "Salt Lake City, Utah",
        "onlineUrl": ""
  },
  {
        "name": "ng-India", 
        "date": "6/10/2037", 
        "price": 215.25, 
        "location": "Gurgaon, India",
        "onlineUrl": "https://www.ng-conf.org/"
  }
]
  
 }

 
  
  constructor() { }

}