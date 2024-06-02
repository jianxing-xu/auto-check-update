export const UpdateNotifySymbol = Symbol('AUTO_CHECK_UPDATE_NOTIFY')

let lastSrcs: string[] | null = null
let timer: any = null

async function getSrcs() {
  const reg = /<script.*src=["'](?<src>[^"]+)/g
  const text = await fetch(`/?time=${Date.now()}`).then(r => r.text())

  reg.lastIndex = 0

  let match: any
  const results: string[] = []
  // eslint-disable-next-line no-cond-assign
  while (match = reg.exec(text))
    results.push(match.groups.src)

  return results
}

async function check() {
  const newSrcs = await getSrcs()
  if (!lastSrcs) {
    lastSrcs = newSrcs
    return false
  }
  if (lastSrcs.length !== newSrcs.length)
    return true

  for (let i = 0; i < lastSrcs.length; i++) {
    if (lastSrcs[i] !== newSrcs[i])
      return true
  }
  return false
}

export function start(options: { onNotify: () => boolean | void, time: number }) {
  if (!options)
    throw new TypeError('options is required')

  const { onNotify, time = 2000 } = options
  if (!onNotify || typeof onNotify !== 'function')
    throw new TypeError('onNotify is required and its type must be Function')

  // @ts-expect-error ssr return
  if (typeof window === 'undefined')
    return

  function run() {
    clearInterval(timer)
    timer = setTimeout(async () => {
      const needUpdate = await check()
      if (!needUpdate)
        return run()
      const r = onNotify()
      if (r)
        return
      run()
    }, time)
  }
  run()
}
