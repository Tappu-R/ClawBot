import chalk from "chalk"
import figlet from "figlet"
import {select, isCancel} from "@clack/prompts"
import {runCliMode} from "../modes/cli.ts"
import {runTelegramMode} from "../modes/telegram.ts"



export async function openProgram(){
    const mode = await select({
        message: "choose modes",
        options: [
            {value:"cli", label:"CLI"},
            {value:"Telegram", label:"Telegram"},
            {value:"exit", label:"Quit"}
        ]
    })

    if (mode === "exit") {
        console.log(chalk.dim("See you soon..."))
        return;
    }

    if (mode === "cli") {
        console.log(chalk.dim("Getting into CLAI(Command Line AI) 😁"))
        await runCliMode()
    } else if (mode === "Telegram") {
        console.log(chalk.dim("Let's Party on Telegram......😏"))
        await runTelegramMode()
    }

}
