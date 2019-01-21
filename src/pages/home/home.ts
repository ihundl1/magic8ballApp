import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ToastController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public cssClass : string;
  private answers = ['It is certain.', 'It is decidedly so.', 'Without a doubt.',
             'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.',
             'Most likely.', 'Outlook good.', 'Yes.',
             'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.',
             'Better not tell you now.', 'Cannot predict now.',
             'Concentrate and ask again.', "Don't count on it.", 'My reply is no.',
             'My sources say no.', 'Outlook not so good.', 'Very doubtful.']
  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {

  }

  giveAnswer(){
    this.cssClass = "animated shake";
    let answer = this.answers[Math.floor(Math.random() * this.answers.length)];
    var temp=this;
    this.presentToast(answer);
  }

  presentToast(answer){
    const toast = this.toastCtrl.create({
      message: answer,
      duration: 5000,
      position: 'bottom'
      //showCloseButton: true
    });
    toast.onDidDismiss(() => {
      this.cssClass = "";
    });
    toast.present();
  }
}
