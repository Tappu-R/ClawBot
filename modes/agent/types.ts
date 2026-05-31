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

