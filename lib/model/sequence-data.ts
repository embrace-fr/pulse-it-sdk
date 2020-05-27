import { SeqState } from './sequence-types';

export interface SequenceDataResponse {
    result: boolean;
    response: SequenceData;
}

export interface SequenceData {
    seq_state: SeqState;
    seq_count_exec: number;
    last_activity: string;
    seq_end_date: string;
    jobs: Job[];
    logs: Log[];
    seq_tags: string[];
    id: number;
    sequence_thumbnail_connector: string;
    seq_workflow_template: number;
    created_by: string;
    seq_custom_css: string;
    progress: Progress;
    count_jobs_in_error: number;
    sequence_template_name: string;
    seq_start_date: string;
    seq_color: string;
    created_by_id: number;
    seq_deadline: string;
    seq_priority: number;
    sequence_thumbnail: null;
    seq_start_datetime: string;
    seq_name: string;
    count_jobs_lost: number;
}

export interface Job {
    last_name?: string;
    job_key: string;
    job_node_level: number;
    job_type: string;
    form_thumbnail?: null;
    job_workload?: number;
    job_start_date: string;
    first_name?: string;
    user_id?: number;
    job_id: number;
    seq_id: number;
    job_state: string;
    seq_workflow_template: number;
    id: number;
    sequence_template_thumbnail: null;
    progress: any[];
    job_name: string;
    job_count_start_if_exec: number;
    username?: string;
    sequence_template_name: string;
    custom_form?: number;
    job_count_exec: number;
    allocation_date?: Date;
    job_end_date: string;
    job_replay_url: string;
    job_last_error: string;
    start_if_instance: null;
    job_execution_path: string;
    seq_priority?: number;
    job_state_for_display: string;
    job_last_activity: string;
    sequence_thumbnail: null;
    allocation_id?: number;
    user_messages?: string[];
    sef_user?: string;
    id_in_graph: string;
    form_name?: string;
    workflow_name?: string;
    workflow_template?: number;
    workflow_instance?: number;
    thumbnail?: null;
}

export interface Log {
    sel_message: string;
    sel_log_past: boolean;
    sel_count_recursive: number;
    sel_type: string;
    seq_id: number;
    sel_job_name: string;
    sel_job_key: string;
    sequence: number;
    sel_from_state: string;
    workflow_instance: number;
    sel_output_context: string;
    sel_execution_path: string;
    sel_job_type: string;
    sel_date_event: string;
    sel_to_state: string;
    id: number;
    sel_user: string;
    sel_from: string;
}

export interface Progress {
    current: number;
    max: number;
    count: number;
    key: string;
}
