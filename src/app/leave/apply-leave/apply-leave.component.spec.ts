import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLeaveComponent } from './apply-leave.component';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Leave } from 'src/app/models/leave';

describe('ApplyLeaveComponent', () => {
  let component: ApplyLeaveComponent;
  let fixture: ComponentFixture<ApplyLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [ ApplyLeaveComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should contain "Apply Leave"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('Apply Leave');
  });

  it('should have <h2> with "Apply Leave"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const h2 = bannerElement.querySelector('h2');
    expect(h2.textContent).toEqual('Apply Leave');
  });

  it('should find the <h2> with fixture.debugElement.nativeElement)', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;
    const h2 = bannerEl.querySelector('h2');
    expect(h2.textContent).toEqual('Apply Leave');
  });

  it('should calculate numbr of days properly', () => {
    let startDate = new Date(2019,1,9);
    startDate.setDate(startDate.getDate() + 1);
    startDate.setHours(0,0,0,0);
    let endtDate = new Date(2019,1,9);
    endtDate.setDate(endtDate.getDate() + 1);
    endtDate.setHours(0,0,0,0);

    fixture.componentInstance.leave = { _id:'', startDate: startDate, endDate: endtDate, noOfDays: 0, leaveReason: '', leaveType:'', leaveStatus: '', empId: 1, appliedOn: new Date() };
    fixture.componentInstance.calculateNumberOfDays(fixture.componentInstance.leave.startDate, fixture.componentInstance.leave.endDate);
    expect(fixture.componentInstance.leave.noOfDays).toEqual(1);
  });

  it('should test if end date is less than start', () => {
    let startDate = new Date(2019,1,9);
    startDate.setDate(startDate.getDate() + 1);
    startDate.setHours(0,0,0,0);
    let endtDate = new Date(2019,1,7);
    endtDate.setDate(endtDate.getDate() + 1);
    endtDate.setHours(0,0,0,0);

    fixture.componentInstance.leave = { _id:'', startDate: startDate, endDate: endtDate, noOfDays: 0, leaveReason: '', leaveType:'', leaveStatus: '', empId: 1, appliedOn: new Date() };
    fixture.componentInstance.calculateNumberOfDays(fixture.componentInstance.leave.startDate, fixture.componentInstance.leave.endDate);
    expect(fixture.componentInstance.leave.noOfDays).toEqual(-1);
  });

  it('should test if save button is disabled when required fields are empty', () => {
    fixture.componentInstance.leave = new Leave();
    fixture.detectChanges();

    fixture.whenStable().then( () => {
      //console.log(component.leaveForm.controls['leaveReason'].value);      
      expect(component.leaveForm.valid).toBeFalsy();
   });    
  });

  it('should test if save button is enabled when required fields are given', () => {
    // let startDate = new Date(2019,1,9);
    // startDate.setMonth(startDate.getMonth() - 1);
    // startDate.setHours(0,0,0,0);
    // let endtDate = new Date(2019,1,9);
    // endtDate.setMonth(endtDate.getMonth() - 1);
    // endtDate.setHours(0,0,0,0);

    fixture.componentInstance.leave = { _id:'', startDate: new Date(), endDate: new Date(), noOfDays: 1, leaveReason: 'Test', leaveType:'EL', leaveStatus: '', empId: 1, appliedOn: new Date() };
    fixture.detectChanges();
        
    fixture.whenStable().then( () => {           
      expect(component.leaveForm.valid).toBeTruthy();
   });
  });
});
