import { generateFile } from '../src/build';

describe('real file test', () => {
    describe.each([
        ['./20210411-zh.json', 'zh'],
        ['./20210411-en.json', 'en'],
    ])('%s', (file, lang) => {
        let expected: any;
        let actual: any;
        beforeAll(async () => {
            expected = require(file);
            actual = JSON.parse(JSON.stringify(await generateFile(lang)));
        });

        test.skip('top-level metadata', () => {
            expect(actual.version).toEqual(expected.version);
            expect(actual.hl).toEqual(expected.hl);
        });

        test.skip('date object', () => {
            expect(actual.weekdays).toEqual(expected.weekdays);
            expect(actual.dayRanges).toEqual(expected.dayRanges);
        });

        test.skip('buses object', () => {
            expect(actual.buses).toEqual(expected.buses);
        });

        test.skip('busesLXSubway object', () => {
            expect(actual.busesLXSubway).toEqual(expected.busesLXSubway);
        });

        test.skip('stops object', () => {
            expect(actual.stops).toEqual(expected.stops);
        });

        test.skip('busTypes object', () => {
            expect(actual.busTypes).toEqual(expected.busTypes);
        });

        test('lang object', () => {
            expect(actual.lang).toEqual(expected.lang);
        });

        test.skip('whole object', () => {
            expect(actual).toEqual(expected);
        });
    });
});