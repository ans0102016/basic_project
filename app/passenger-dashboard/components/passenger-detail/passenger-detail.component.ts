import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
        <span
            class="status"
            [ngStyle]="{
            backgroundColor: (detail.checkedIn ? '#2ecc71' : '#c0392b')
            }"></span>
        {{ detail.fullname }}
        Check in Date:
        {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in'}}
        <div class="children">
            Children: {{ detail.children?.length || 0 }}
        </div>
    `
})

export class PassengerDetailComponent {
    @Input()
    detail: Passenger[];
    constructor() {}
}