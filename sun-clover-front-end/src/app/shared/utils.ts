import { IPopup } from '../models/popup.interface';
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs';

export default class Utils {
  static apiUrl = environment.apiUrl;
  static successCode = '0';
  static existedCode = '0';
  static invalidSessionCode = '1';
  static popupWidth = '500px';
  static defaultPagesize = 10;
  static defaultPageIndex = 1;
  static defaultPaginatorRange = 5;
  static defaultAvatarSrc = 'https://mdnalifesciences.com/wp-content/uploads/2017/11/tb-avatar-none.jpg';
  static userLS = 'user';
  static userAccessTokenLS = 'userAccessToken';
  static userMenuLS = 'userMenus';
  static userAccessLS = 'userAccess';
  static rootLink = '/admin';
  static loginUrl = '/login';
  static pageSizeOption = [10, 20, 50];
  static defaultErrorTitle = 'Error';
  static defaultErrorBody = 'Something went wrong !';
  static defaultPopupCancel = 'Cancel';
  static defaultPopupConfirm = 'OK';
  static homePageKey = 'home';
  static changePasswordRegex: RegExp = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  static passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  static phoneRegex: RegExp = /^(65)[0-9]{8}$/;
  static emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  static confirmClosePopup: IPopup = {
    Title: 'Warning',
    Body: 'The changes you made will be lost if you navigate away from this page. Are you sure you want to leave this page?',
    CancelText: 'No',
    ConfirmText: 'Yes',
    AlignBtn: 'end',
    Width: '400px',
    Height: '170px',
    Template: undefined,
    StyleClass: undefined,
  };

  static errorPopup: IPopup = {
    Title: 'Error',
    Body: 'Something went wrong!',
    ConfirmText: 'Ok',
    AlignBtn: 'center',
    Width: '400px',
    Height: '170px',
    Template: undefined,
    StyleClass: undefined,
  };
  /**
   * Unsubscribe
   * @param {Subscription[]} subscriptions
   */
  public static unsubscribe(subscriptions: Subscription[]) {
    subscriptions.forEach((subscription: Subscription) => {
      if (!subscription.closed) subscription.unsubscribe();
    });
  }
  static imgValidDefault = {
    types: ['image/png', 'image/jpg', 'image/jpeg'],
    maxSize: 3*1024*1024,
  }
  static locationCollectionAd = [
    {id: 1, name: 'Home'},
    {id: 2, name: 'Select Collect'},
    {id: 3, name: 'Rate Service'},
    {id: 4, name: 'Opening Compartment'},
    {id: 5, name: 'Finish Compartment'}
  ]
}

export const rangeItemStr = (pageIndex: number, totalPage: number, totalItem: number, pageSize: number) => {
  const maxCurrentItem = pageIndex === totalPage ? totalItem : pageSize * pageIndex;
  const str = 'Showing ' + ((pageSize * pageIndex) - pageSize + 1) + '-' + maxCurrentItem + ' of ' + totalItem + ' items';
  return str;
};

export const genPaginator = (pageIndex: number, paginatorRange: number, totalPage: number) => {
  const showedPages = [];
  const range = paginatorRange % 2 > 0 ? (paginatorRange - 1) / 2 : paginatorRange / 2;
  let firstPage = 1;
  if (pageIndex > range + 1) {
    firstPage = pageIndex - range;
  }
  let temp = 0;
  if (totalPage - pageIndex < range) {
    temp = range - (totalPage - pageIndex);
  }
  if (temp > 0) {
    firstPage = firstPage - temp;
  }
  firstPage = firstPage < 1 ? 1 : firstPage;
  let lastPage = (firstPage + paginatorRange - 1);
  lastPage = lastPage > totalPage ? totalPage : lastPage;
  for (let i = firstPage; i <= lastPage; i++) {
    showedPages.push(i);
  }
  return showedPages;
};

export const checkDate = (date: string) => {
  date = date.includes('Invalid') ? '' : date;
  return date;
};

export const imageResize = (file: any, maxW = 500, maxH = 500) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  if (file) {
    reader.onload = function (e: any) {
      const img = new Image();
      img.src = e.target.result;

      img.onload = () => {
        const MAX_WIDTH = maxW;
        const MAX_HEIGHT = maxH;
        let width = img.width;
        let height = img.height;

        // Resize
        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (ctx)
          ctx.drawImage(img, 0, 0, width, height);

        const dataurl = canvas.toDataURL(file.type);
        resolve(dataurl);
      };
    };
    reader.readAsDataURL(file);
  }
  reader.onerror = (error) => reject(error);
});

export const parseJWT = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
};

export const addLoading = () => {
  const loadingAreas = document.querySelectorAll('.sidenav-container');
  if (loadingAreas.length > 0) {
    loadingAreas.forEach((el) => {
      el.classList.add('loading');
    });
  }
};

export const removeLoading = () => {
  const loadingAreas = document.querySelectorAll('.sidenav-container');
  if (loadingAreas.length > 0) {
    loadingAreas.forEach((el) => {
      el.classList.remove('loading');
    });
  }
};


export const matchesRegex = (regex: RegExp, text: any) => {
  return (new RegExp(regex)).test(text);
}

export const getFormattedDate = (date: Date) => {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return month + '/' + day + '/' + year;
}

export const isTodayDate = (date: Date) => {
  const today = new Date();
  if (today.toDateString() === date.toDateString()) {
    return true;
  }
  return false;
}
