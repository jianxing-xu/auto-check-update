import { describe, expect, it } from 'vitest'
import { getSrcs } from '../src'

describe('sample test', () => {
  it.todo('test it todo')
  it('get all script srcs', async () => {
    const case1 = `<script src="http://a.js"></script>`
    const case2 = `<script src="http://b.js" />`
    const case3 = `
      <script src="http://a.js"></script>
      <script src="http://b.js" />
    `

    expect(getSrcs(case1)).toEqual(['http://a.js'])
    expect(getSrcs(case2)).toEqual(['http://b.js'])
    expect(getSrcs(case3)).toEqual(['http://a.js', 'http://b.js'])
  })
})
