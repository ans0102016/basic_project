import { Component, Input } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <form #form="ngForm" novalidate>
            {{ detail | json }}
            <div>
                Passenger Name:
                <input
                    type="text"
                    name="fullname"
                    [ngModel]="detail?.fullname">
            </div>
            <div>
                ID:
                <input
                    type="number"
                    name="id"
                    [ngModel]="detail?.id">
            </div>
            {{ form.value | json }}
        </form>
    `
})

export class PassengerFormComponent { 
    @Input()
    detail: Passenger;
}