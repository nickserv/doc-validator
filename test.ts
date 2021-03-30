import { parse } from "."

function js(src) {
  return `\`\`\`js\n${src}\n\`\`\``
}

test("parse", () => {
  const src = 'console.log("Hello, world!")'
  expect(parse(js(src))).toEqual([src])
  expect(() => parse(js('console.log("Whoops'))).toThrow(SyntaxError)
})
