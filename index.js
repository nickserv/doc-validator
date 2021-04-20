import marked from "marked"
import babel from "@babel/core"

export async function parse(markdown) {
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
