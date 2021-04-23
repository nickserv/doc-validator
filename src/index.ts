import marked from "marked"
import babel from "@babel/core"

export async function parse(markdown: string) {
  const snippets = marked
    .lexer(markdown)
    .filter((token) => token.type === "code" && token.lang === "js")
    .map((token) => token.raw)

  const results = await Promise.allSettled(
    snippets.map((snippet) =>
      babel.parseAsync(snippet, { sourceType: "unambiguous" })
    )
  )

  const errors = results.filter((result): result is PromiseRejectedResult => {
    return result.status === "rejected"
  })

  return errors.map((result) => result.reason)
}
