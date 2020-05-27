import APIConnector from './helpers/api-connector';
import { SequenceList } from './model/sequence-list';
import { SequenceListRequest } from './model/sequence-list-request';
import { SequenceDataResponse } from './model/sequence-data';
import { CreateSequenceRequest } from './model/create-sequence-request';
import { CreateSequenceResponse } from './model/create-sequence-response';
//Exports not properly declared in DateFormat typings so need to import like this
import * as DateFormat from 'dateformat';

export default class PulseIT {
    constructor(url: string, user: string, password: string) {
        this.apiConnector = new APIConnector(url, user, password);
    }

    public async GetSequenceList(params?: SequenceListRequest): Promise<SequenceList> {
        let path = '/sequence/rest/list';

        if (params) {
            path += '?';

            const keys: string[] = Object.keys(params);

            for (let i = 0; i < keys.length; i++) {
                let val = params[keys[i]];

                if (val instanceof Date) {
                    val = DateFormat(val, 'yyyy/mm/dd');
                }

                path += `${keys[i]}=${params[keys[i]]}`;
                if (i != keys.length - 1) {
                    path += '&';
                }
            }
        }

        return this.apiConnector.getRequest<SequenceList>(path);
    }

    public async GetSequenceData(id: number): Promise<SequenceDataResponse> {
        return this.apiConnector.getRequest<SequenceDataResponse>(`/sequence/rest/data?sequence_id=${id}`);
    }

    public async CreateAndStartSequence(request: CreateSequenceRequest): Promise<CreateSequenceResponse> {
        request.deadline = DateFormat(request.deadline, 'yyyy/mm/dd');
        if (request.allocation_date) {
            request.allocation_date = DateFormat(request.allocation_date, 'yyyy/mm/dd');
        }

        return (await this.apiConnector.postRequest('sequence/rest/create_and_start', request)).data as CreateSequenceResponse;
    }

    private apiConnector: APIConnector;
}
