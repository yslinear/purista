import { getEventBridgeMock, getFunctionContextMock, getLoggerMock } from '@purista/core'

import { UserService } from '../../UserService'
import functionDefinition from './index'

const f = functionDefinition.getFunction()

const service = new UserService(getLoggerMock().mock, getEventBridgeMock().mock)
const fn = f.bind(service)

test('returns a new user id', async () => {
  const payload = {
    email: 'mail@example.com',
    password: 'the_password',
    test: '',
  }

  const params = {}

  const initialPayload = JSON.stringify(payload)

  const context = getFunctionContextMock(initialPayload, params)

  context.stubs.invoke.resolves('mocked response data')

  const result = await fn(context.mock, payload, params)

  expect(result.uuid).toBeDefined()

  expect(context.stubs.logger.debug.calledWith(initialPayload)).toBeTruthy()
})
