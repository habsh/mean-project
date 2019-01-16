export class Leave {
	_id: string;
	leaveId?: number;
	empId: number;
	noOfDays:  number;
	startDate: Date;
	endDate: Date;
	leaveStatus: string;//TODO: define as inum
	appliedOn: Date;
	managerComments?: string;
	leaveReason: string;
	leaveType: string;//TODO: define as inum
};