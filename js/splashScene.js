/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: April 17
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  /**
  * This method is the constructor.
  */
  constructor() {
    super({ key: 'splashScene' })

    this.SplashSceneBackgroundImage = null
  }
  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts, 
   *  before preload() and create().
  * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
  */
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  /** Can be defined on you own Scenes.
   * Use it to load assets.
   */
  preload() {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
  }

  /**Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    this.SplashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      'splashSceneBackground'
    )
    this.SplashSceneBackgroundImage.x = 1920 / 2
    this.SplashSceneBackgroundImage.y = 1080 / 2
  }

  /**
   * This method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame
   */
  update(time, delta) {
    if (time > 3000) {
      this.scene.switch('titleScene')
    }
  }
}

export default SplashScene
