#!usr/bin/env bun
// shebang command upar hai dekh lo

import {Command} from "commander"
import {openProgram} from "./tui/terminal.ts"

const program = new Command()
program
    .name("Tappuclaw")
    .description("ClawAi")
    .version("1.0.0")

program
    .command("wakeup")
    .description("Show the banner and pickup options")
    .action(
        async()=>{
            console.log("opening.....")
            await openProgram()
        }
    )
await program.parseAsync(process.argv)