import chalk from "chalk"
import {text} from "@clack/prompts"
import {isCancel} from "@clack/prompts"

export async function runAgentMode() {
    const goal = await text({
        message: "What I can do for you",
        placeholder: "Build a rocket for me 🙏"
    })
    if (!goal) return;
    
    const config = defaultAgentConfig()
}