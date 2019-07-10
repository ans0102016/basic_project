import { Component, Input, Output, EventEmitter } from '@angular/core';
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
        <div *ngIf="editing">
            <input 
                type="text" 
                [value]="detail.fullname"
                (input)="onNameChange(name.value)"
                #name>
        </div>
        <div *ngIf="!editing">
            {{ detail.fullname }}
        </div>
        Check in Date:
        {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in'}}
        <div class="children">
            Children: {{ detail.children?.length || 0 }}
        </div>
        <div>
            <button (click)="toggleEdit()">
                {{ editing? 'Done' : 'Edit'}}
            </button>
            <button (click)="onRemove()">
                Remove
            </button>
        </div>
    `
})

export class PassengerDetailComponent {
    
    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    editing: boolean = false;

    constructor() {}

    onNameChange(value: string) {
        this.detail.fullname = value;
    }

    toggleEdit() {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove() {
        this.remove.emit(this.detail);
    }
}