import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls:['passenger-dashboard.component.scss'],
    template: `
        <div>
            <h3>Airline Passengers</h3>
            <ul>
            <li *ngFor="let passenger of passengers, let i = index">
                <span
                class="status"
                [ngStyle]="{
                backgroundColor: (passenger.checkedIn ? '#2ecc71' : '#c0392b')
                }"></span>
                {{ i }}: {{ passenger.fullname }}
                Check in Date:
                {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in'}}
                <div class="children">
                    Children: {{ passenger.children?.length || 0 }}
                </div>
            </li>
            </ul>
        </div>
    `
})

export class PassengerDashboardComponent implements OnInit { 

    passengers: Passenger[];
    constructor() {}
    ngOnInit() {
      this.passengers = 
      [{
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
      }, {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [{name: 'Ted', age: 12}, {name: 'Chloe', age: 7}]
      }, {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
      }, {
        id: 4,
        fullname: 'Louise',
        checkedIn: true,
        checkInDate: 1498750000000,
        children: [{name: 'Jessica', age: 1}]
      }, {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null
      }]
    }
}