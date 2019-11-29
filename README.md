# Adonis Logger Rollbar <img src="https://static.chief.io/media/companies/rollbar_profile.jpeg" alt="Rollbar icon" width="25px" height="25px">

This service provider adds Rollbar as a driver to Adonis Logger.

This repo is based from https://github.com/keeross/adonis-logger-logentries.


## Usage

### Registering provider

Make sure to register the provider inside `start/app.js` file.

```js
const providers = [
  'adonis-logger-rollbar/providers/RollbarProvider'
]
```

Add new configuration inside `logger` module in `config/app.js`:
```js
transport: 'rollbar'

rollbar: {
  driver: 'rollbar',
  token: Env.get('ROLLBAR_ACCESS_TOKEN', ''),
  level: 'info'
}
```

That's it! Now you can use Logger that will send data to Rollbar.

```js
const Logger = use('Logger')

Logger.info('Test message')

```

### Env variables

`Rollbar` driver relies on single Env variable: `ROLLBAR_ACCESS_TOKEN=`.


