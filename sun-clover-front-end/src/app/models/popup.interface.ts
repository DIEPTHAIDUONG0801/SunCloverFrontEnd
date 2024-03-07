import { TemplateRef } from '@angular/core';

export interface IPopup {
  Title?: string;
  Body?: string;
  CancelText?: string;
  ConfirmText?: string;
  AlignBtn?: string;
  Width?: string;
  Height?: string;
  Template?: TemplateRef<any> | undefined;
  StyleClass?: string[] | undefined;
  AutoFocus?: boolean;
  isErrorAlert?: boolean;
}
