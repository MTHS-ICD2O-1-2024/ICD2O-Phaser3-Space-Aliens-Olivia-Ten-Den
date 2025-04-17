/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: April 17
// This is the Splash Scene

class SplashScene extends Phaser.Scene {

  constructor() {
    super({ key: 'splashScene' })
  }

  init(data) {
    this.cameras.main.setBackgroudColor('ffffff')
  }

  preload() {
    console.log('Splash Scene')
  }

  create (data) {
  }

  update (time,data) {
  }
}

export default SplashScene
