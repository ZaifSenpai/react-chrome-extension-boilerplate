// Tip: use `export const` to export constants
// and to import, use `import * as Constants from 'path/to/constants'`
// for better readability

export const REQUEST_PING = "ping";
export const RESPONSE_PONG = "pong";

// @ts-expect-error: process is not defined. `process.env.NODE_ENV` is replace by webpack at build time
export const DEBUG_MODE = process.env.NODE_ENV === "development";
