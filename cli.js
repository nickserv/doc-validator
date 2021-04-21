#!/usr/bin/env node
import { parse } from "./index.js"
import fsCallbacks from "fs"
const fs = fsCallbacks.promises

async function getStdin() {
  let result = ""
  for await (const chunk of process.stdin) result += chunk
  return result
}

;(async () => {
  const path = process.argv[2]
  const text = path
    ? await fs.readFile(path, { encoding: "utf8" })
    : await getStdin()
  const errors = await parse(text)
  for (const error of errors) console.error(error)
  if (errors.length) process.exitCode = 1
})()
