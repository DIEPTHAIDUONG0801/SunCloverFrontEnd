import {Component, OnInit, Inject} from '@angular/core';
import {IPopup} from '../../models/popup.interface';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IPopup,

    private mdDialogRef: MatDialogRef<PopupComponent>) { }

  ngOnInit(): void {
  }
}
