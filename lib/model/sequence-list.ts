import { SeqState } from './sequence-types';

export interface SequenceList {
    result: boolean;
    response: Response;
}

export interface Response {
    recordsTotal: number;
    recordsFiltered: number;
    draw: string;
    data: Datum[];
    error: string;
}

export interface Datum {
    seq_state: SeqState;
    seq_count_exec: number;
    last_activity: string;
    seq_end_date?: string;
    seq_tags: string[];
    id: number;
    sequence_thumbnail_connector?: string;
    seq_id: number;
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

export interface Progress {
    current: number;
    max: number;
    count: number;
    key: Key;
}

export enum Key {
    Progress = 'Progress',
}
