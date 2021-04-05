import marked from "marked"
import babel from "@babel/core"

export function parse(markdown) {
  const snippets = marked
    .lexer(markdown)
    .filter((token) => token.type === "code")
    .map((token) => token.text)
  for (const snippet of snippets) {
    babel.parseSync(snippet, { sourceType: "unambiguous" })
  }
  return snippets
}
