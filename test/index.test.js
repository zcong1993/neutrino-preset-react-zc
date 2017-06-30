const { Neutrino } = require('neutrino')
const { validate } = require('webpack')

const mw = () => require('../')

test('loads preset', () => {
  expect(mw).not.toThrow()
})

test('uses prese', () => {
  const api = new Neutrino()
  expect(() => api.use(mw())).not.toThrow()
})

test('valid preset production', () => {
  const api = new Neutrino({ env: { NODE_ENV: 'production' } })
  api.use(mw())
  const errors = validate(api.config.toConfig())
  expect(errors.length).toBe(0)
})

test('valid preset development', () => {
  const api = new Neutrino({ env: { NODE_ENV: 'development' } })
  api.use(mw())
  const errors = validate(api.config.toConfig())
  expect(errors.length).toBe(0)
})
