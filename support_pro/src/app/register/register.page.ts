import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  username: string = '';
  // tslint:disable-next-line:no-inferrable-types
  password: string = '';
  // tslint:disable-next-line:no-inferrable-types
  cpassword: string = '';
  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth,private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async register() {
    const { username, password, cpassword } = this;

    if (password !== cpassword) {
      return this.alertCtrl.create({
        header: '',
        message: '비밀번호가 다릅니다',
        buttons: [{
          text: '확인',
          role: 'cancel'
        }]
      }).then(alertEl => {
        alertEl.present();
      });
    }
    if(username === "" || password === ""){
      this.alertCtrl.create({
        header: '',
        message: '아이디와 비밀번호를 확인해주세요',
        buttons: [{
          text: '확인',
          role: 'cancel'
        }]
      }).then(alertEl => {
        alertEl.present();
      });
      return;
    }
    try {
      const res =  this.afAuth.auth.createUserWithEmailAndPassword(username, password);
      this.navCtrl.navigateBack('/tabs/tab1');
  } catch (error) {
   
    }
  }

}
