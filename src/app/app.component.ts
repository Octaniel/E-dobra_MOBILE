import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/folder/home',
      icon: 'home'
    },
    {
      title: 'Ajuda',
      url: '/folder/ajuda',
      icon: 'help-circle'
    },
    {
      title: 'FeedBack',
      url: '/folder/feedBack',
      icon: 'reader'
    },
    {
      title: 'Compartilhar',
      url: '/folder/compartilhar',
      icon: 'share-social'
    },
    {
      title: 'Avaliar',
      url: '/folder/avaliar',
      icon: 'star-half'
    },
    {
      title: 'Sobre',
      url: '/folder/sobre',
      icon: 'information'
    },
    {
      title: 'Logout',
      url: '/folder/logout',
      icon: 'log-out'
    }
  ];
  public labels = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  exibindoNavbar() {
    return this.router.url !== '/login';
  }
}
