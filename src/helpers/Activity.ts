export default class Activity {
  constructor(title: string, isBusy: boolean = false) {
    this.title = title;
    this.isBusy = isBusy;
  }

  title: string;
  isBusy?: boolean;
}
