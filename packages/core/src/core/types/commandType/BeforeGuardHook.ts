import type { ServiceClass } from '../ServiceClass'
import type { CommandFunctionContext } from './CommandFunctionContext'

/**
 * Guard is called after command function input validation and before executing the command function.
 * The guard is usefull to separate for example auth checks from business logic.
 * It should throw HandledError or return void.
 */
export type BeforeGuardHook<
  ServiceClassType = ServiceClass,
  MessagePayloadType = unknown,
  MessageParamsType = unknown,
  FunctionPayloadType = MessagePayloadType,
  FunctionParamsType = MessageParamsType,
> = (
  this: ServiceClassType,
  context: CommandFunctionContext<MessagePayloadType, MessageParamsType>,
  payload: FunctionPayloadType,
  params: FunctionParamsType,
) => Promise<void>
