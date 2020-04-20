/*
In this exercise you will be practicing how to apply an Angular http service to retrieve data


Instructions:
The data for the events component is currently hard-coded in the component. Create a service to hold this data and return it from a getEvents() method on the service. To do this you will need to:

1. Create the service and register it
2. Remove the data from the component and then inject and call the service to get the data.

*/

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
