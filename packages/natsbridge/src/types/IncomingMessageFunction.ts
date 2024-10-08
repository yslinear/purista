import type { Msg, NatsError } from 'nats'

import type { NatsBridge } from '../NatsBridge.js'

export type IncomingMessageFunction = (this: NatsBridge, error: NatsError | null, msg: Msg) => Promise<void>
