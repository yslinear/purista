import type { z } from 'zod'

import type { pingV1LogInputPayloadSchema } from './schema.js'

export type PingV1LogInputPayload = z.output<typeof pingV1LogInputPayloadSchema>
