import {Injectable} from '@angular/core';
import {MatDialogRef, MatDialog} from '@angular/material/dialog';
import {PopupComponent} from "../components/popup/popup.component";
import {IPopup} from '../models/popup.interface';
import Utils from '../shared/utils';


@Injectable()
export class PopupService {
  public title: string = '';
  public body: string = '';
  public class: string = '';
  dialogRef: MatDialogRef<any> | undefined;
  public isAutofocus: boolean = false;
  public isErrorAlert!: boolean;

  constructor(private dialog: MatDialog) { }

  public open(data?: IPopup) {
    const isErrorAlert = !!data?.isErrorAlert
    if (this.isErrorAlert && isErrorAlert) return;
    this.isErrorAlert = isErrorAlert;
    if (data) {
      // set default if Null
      const pWidth = (data && data.Width) ? data.Width : Utils.popupWidth;
      const pHeight = (data && data.Height) ? data.Height : '';
      data.Title = data.Title ? data.Title : Utils.defaultErrorTitle;
      data.Body = data.Body ? data.Body : Utils.defaultErrorBody;
      data.CancelText = data.CancelText ? data.CancelText : '';
      data.ConfirmText = data.ConfirmText ? data.ConfirmText : Utils.defaultPopupConfirm;
      data.AlignBtn = data.AlignBtn ? data.AlignBtn : 'center';

      if (data.Template) {
        this.dialogRef = this.dialog.open(data.Template, {data, width: pWidth, height: pHeight});
      } else {
        this.dialogRef = this.dialog.open(PopupComponent, {data, width: pWidth, height: pHeight});
      }
    } else {
      const data: IPopup = {
        Title: Utils.defaultErrorTitle,
        Body: Utils.defaultErrorBody,
        AlignBtn: 'center',
        ConfirmText: Utils.defaultPopupConfirm,
        CancelText: '',
        Template: undefined,
        StyleClass: undefined,
        Width: Utils.popupWidth,
        Height: '',
        AutoFocus : this.isAutofocus,
      };
      this.dialogRef = this.dialog.open(PopupComponent, {data, width: data.Width, autoFocus: this.isAutofocus});
    }
  }

}
