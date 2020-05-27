import { SeqState, SeqSortBy } from './sequence-types';

export interface SequenceListRequest {
    seq_id?: number;
    template_id?: string;
    created_by?: string | number;
    state_filter?: SeqState;
    sort_by?: SeqSortBy;
    deadline?: Date;
    color_filter?: string;
    start?: number;
    length?: number;
    search?: string;
}
