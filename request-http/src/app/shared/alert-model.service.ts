import {Injectable} from '@angular/core';
import {AlertModalComponent} from "./alert-modal/alert-modal.component";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

export enum AlertTypes {
  DANGER  = 'danger',
  SUCCESS = 'success'
}


@Injectable({
  providedIn: 'root'
})
export class AlertModelService {



  constructor(private modalService: BsModalService) {
  }

  private showAlert(message: string, type: AlertTypes, dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER)
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS, 3000)
  }

}
