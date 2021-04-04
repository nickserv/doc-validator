import marked from "marked"
import parser from "@babel/parser"

export function parse(markdown) {
  const snippets = marked
    .lexer(markdown)
    .filter((token) => token.type === "code")
    .map((token) => token.text)
  for (const snippet of snippets) {
    parser.parse(snippet, { sourceType: "unambiguous" })
  }
  return snippets
}
