import { parse } from "."

function js(src) {
  return `\`\`\`js\n${src}\n\`\`\``
}

describe("parse", () => {
  test("parses valid JS", () => {
    const src = 'console.log("Hello, world!")'
    expect(parse(js(src))).toEqual([src])
  })

  test("does not parse invalid JS", () => {
    expect(() => parse(js('console.log("Whoops'))).toThrow(SyntaxError)
  })

  test("skips parsing other languages", () => {
    expect(parse("```\n.\n```")).toEqual([])
    expect(parse("```sh\n.\n```")).toEqual([])
  })
})
