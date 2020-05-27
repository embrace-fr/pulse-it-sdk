import PulseIT from '../dist/lib/pulse-it';
import { SeqState } from '../dist/lib/model/sequence-types';

describe('Check library functionality', () => {
    //Substitute your own environment details to test
    const url = '<YOUR PULSE IT URL>';
    const user = '<YOUR USER>';
    const password = '<YOUR PASSWORD>';

    it(`Should get the sequence list`, async function () {
        const api = new PulseIT(url, user, password);

        const sequences = await api.GetSequenceList({ state_filter: SeqState.Done });

        expect(sequences.response.error).toBe('');
    });

    it(`Should create a sequence`, async function () {
        const api = new PulseIT(url, user, password);

        const newSequence = await api.CreateAndStartSequence({
            template_id: 9,
            title: 'API test',
            deadline: new Date(),
        });

        expect(newSequence.response.sequence_data.id).toBeDefined();
    });

    it(`Should get sequence data`, async function () {
        const api = new PulseIT(url, user, password);

        const id = 102;
        const sequence = await api.GetSequenceData(id);

        expect(sequence.response.id).toBe(id);
    });
});
