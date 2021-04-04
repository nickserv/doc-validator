#!/usr/bin/env node
import { parse } from "./index.js"
import fsCallbacks from "fs"

const fs = fsCallbacks.promises
const path = process.argv[2]
const text = await fs.readFile(path, { encoding: "utf8" })
parse(text)
