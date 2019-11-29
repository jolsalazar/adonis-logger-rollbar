'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const Rollbar = require('../drivers/Rollbar')

class RollbarProvider extends ServiceProvider {
  register () {

    this.app.extend('Adonis/Src/Logger', 'rollbar', () => {
      return new Rollbar()
    })

  }

}

module.exports = RollbarProvider
