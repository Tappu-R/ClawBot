import chalk from "chalk"
import figlet from "figlet"
import {select, isCancel} from "@clack/prompts"



export async function openProgram(){
    const mode = await select({
        message: "choose modes",
        options: [
            {value:"cli", label:"CLI"},
            {value:"Telegram", label:"Telegram"},
            {value:"exit", label:"Quit"}
        ]
    })

    if (isCancel(mode || mode === "exit")) {
        console.log(chalk.dim("See you soon..."))
    }

    if (mode === "cli") { 
        console.log(chalk.dim("Getting into CLAI(Command Line AI) 😁"))
    } else if (mode === "Telegram") {
        console.log(chalk.dim("Let's Party on Telegram......😏"))
    }

}
