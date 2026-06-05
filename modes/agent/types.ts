export type ActionType =
    | "fileCreate"
    | "fileModify"
    | "fileDelete"
    | "folderCreate"
    | "codeAnalysis"
    | "toolExecute"

export type ActionStatus = 'completed'| 'pending'| 'approved'| 'rejected'

export interface ActionLog {
    id: String;
    timestamp: Date;
    type: ActionType;
    path: String;
    details: {
        before?: String;
        after?: String;
        tool_names?:String;
        tool_results?:String;
        error?:String;
        command?:String;
    };
    status:ActionStatus;
    userApproved:boolean;
}

export interface AgentConfig {
    codeBasePath:string;
    maxFileSizeToRead:number;
    excludedPatterns:string[];
    tools: {
        allowShellExecution:boolean;
        allowFileCreation:boolean;
        allowFileModification:boolean;
        allowFolderCreation:boolean;
    };
}

export const defaultAgentConfig = (): AgentConfig => ({
    codeBasePath:process.cwd(),
    maxFileSizeToRead:1024 * 1024,
    excludedPatterns: [
        "node_module",
        ".git",
        ".node",
        ".env*",
        "build",
        "dist",
        ".next"
    ],
    tools : {
        allowShellExecution: true,
        allowFileCreation: true,
        allowFileModification: true,
        allowFolderCreation: true
    }
})

export function isMutationType(t : ActionType): boolean {
    return (
        t === "fileCreate"||
        t === "fileModify"||
        t === "fileDelete"||
        t === "folderCreate"||
        t === "codeAnalysis"||
        t === "toolExecute"
    );
}
