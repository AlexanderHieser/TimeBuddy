import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment'
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  date:string = "Hello";
  weekday_name:string = "";
  month_name:string ="";
  month:Array<string> = ["Hello","hello2"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.date = moment().format("DD.MM.YYYY");
    this.weekday_name = moment().format("dddd");
    this.month_name = moment().format("MMMM");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
