import { SequenceData } from './sequence-data';

export interface CreateSequenceResponse {
    response: Response;
    result: boolean;

}

export interface Response {
    sequence_data: SequenceData;
    sequence_id: number;
}
