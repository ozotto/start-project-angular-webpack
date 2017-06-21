import angular from 'angular';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'angular-animate'
import 'angular-aria'
import 'angular-material'
import 'angular-material/angular-material.css';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.date = new Date();
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngAnimate', 'ngAria', 'ngMaterial'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
