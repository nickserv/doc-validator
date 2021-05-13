const marked = require("marked")
const babel = require("@babel/core")

exports.parse = async (markdown) => {
  const snippets = marked
    .lexer(markdown)
    .filter((token) => token.type === "code" && token.lang === "js")
    .map((token) => token.text)
  const promises = snippets.map((snippet) =>
    babel.parseAsync(snippet, { sourceType: "unambiguous" })
  )
  return (await Promise.allSettled(promises))
    .filter((result) => result.status === "rejected")
    .map((result) => result.reason)
}
