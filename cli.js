#!/usr/bin/env node
import { parse } from "./index.js"
import { program } from "commander"
import fsCallbacks from "fs"
const fs = fsCallbacks.promises

async function getStdin() {
  let result = ""
  for await (const chunk of process.stdin) result += chunk
  return result
}

program
  .command("parse [path]")
  .description("parse file with Babel")
  .action(async (path) => {
    const text = path
      ? await fs.readFile(path, { encoding: "utf8" })
      : await getStdin()
    const errors = await parse(text)
    for (const error of errors) console.error(error)
    if (errors.length) process.exitCode = 1
  })

program.parse()
