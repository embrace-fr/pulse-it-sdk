export enum SeqState {
    Done = 'DONE',
    InProgress = 'IN_PROGRESS',
    Idle = 'IDLE',
    Failed = 'FAILED',
    Lost = 'LOST',
    Deleting = 'DELETING',
    Restarting = 'RESTARTING',
}

export enum SeqSortBy {
    seq_name = 'Name',
    id = 'ID',
    seq_state = 'State',
    seq_priority = 'Priority',
    seq_created_by__username = 'CreatedBy',
    seq_count_exec = 'ExecutionCount',
    seq_deadline = 'Deadline',
    seq_start_date = 'StartDate',
    seq_end_date = 'EndDate',
    seq_last_action_date = 'LastActionDate',
    seq_workflow_template__wft_name = 'TemplateName',
}
