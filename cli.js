#!/usr/bin/env node
import { parse } from "./index.js"
import fsCallbacks from "fs"

async function getStdin() {
  let result = ""
  for await (const chunk of process.stdin) result += chunk
  return result
}

const fs = fsCallbacks.promises
const path = process.argv[2]
const text = path
  ? await fs.readFile(path, { encoding: "utf8" })
  : await getStdin()
parse(text)
