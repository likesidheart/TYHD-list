import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA-lJqOm20xpCIKZj1j3gdV0HG1gf4QEN0',
      authDomain: 'ng-tyhd.firebaseapp.com',
    });
  }
}
