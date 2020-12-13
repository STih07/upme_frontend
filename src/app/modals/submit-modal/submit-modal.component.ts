import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserSubmit } from 'src/app/models/user-submit';

@Component({
  selector: 'app-submit-modal',
  templateUrl: './submit-modal.component.html',
  styleUrls: ['./submit-modal.component.scss']
})
export class SubmitModalComponent implements OnInit {

  @Input() user: UserSubmit;
  @Output() entryValue: EventEmitter<any> = new EventEmitter();

  constructor(
    private modalService: NgbActiveModal,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { }

  submitModal(): void {
    this.user.users.forEach(user$ => {
      user$.decision = this.user.solution;
    });

    this.entryValue.emit(this.user);

    this.toastr.success('Готово', '', {
      timeOut: 5000,
      toastClass: 'ngx-toastr success-toastr',
    });

    this.modalService.close();
  }

  closeModal(): void {
    this.modalService.close();
  }

}