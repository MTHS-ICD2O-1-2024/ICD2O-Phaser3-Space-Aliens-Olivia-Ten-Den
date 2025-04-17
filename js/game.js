/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: April 11
// This is the Phaser3 game configuration file

import SplashScene from './splashScene.js'

//Our game scene
const splashScene = new SplashScene()

/**
 * Start Phaser Game
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // center it to middle of page
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)

// load scenes
//NOTE: remember any "key" is global and can NOT de reused
game.scene.add("splashScene", SplashScene)

// the start scene
game.scene.start("splashScene")
