import { Component } from '@angular/core';
import { IEvent } from './event';
import { EventService } from './event.service';

@Component({
  selector: 'app-events',
  templateUrl: 'events.component.html'
})

export class EventsComponent{
  titlePage: string = 'Angular Events Scheduled for 2020';

  events: IEvent[] = [];

  constructor(private eventService:EventService){}

  ngOnInit():void{
        this.events = this.eventService.getEvent();
    }

  getMessage(event):void{
    alert("I am happy you will be able to come!")
  }
  
};