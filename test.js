const { parse } = require(".")

function js(src) {
  return `\`\`\`js\n${src}\n\`\`\``
}

describe("parse", () => {
  test("parses valid JS", async () => {
    const src = 'console.log("Hello, world!")'
    expect(await parse(js(src))).toEqual([])
  })

  test("does not parse invalid JS", async () => {
    expect(await parse(js('console.log("Whoops'))).toEqual([
      expect.any(SyntaxError),
    ])
  })

  test("skips parsing other languages", async () => {
    expect(await parse("```\n.\n```")).toEqual([])
    expect(await parse("```sh\n.\n```")).toEqual([])
  })
})
