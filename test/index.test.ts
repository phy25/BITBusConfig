import { generateFile } from '../src/build';

const dropDays = (e: any) => {
    e.days = [];
    return e;
};

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

        test('top-level metadata', () => {
            expect(actual.version).toEqual(expected.version);
            expect(actual.hl).toEqual(expected.hl);
        });

        describe.each([2017, 2018, 2019, 2020, 2021])('calendar object - %d', (year) => {
            test('dayRanges', () => {
                expect(actual.dayRanges).toEqual(expected.dayRanges);
            });

            test.each([...Array(12).keys()])('month_i %d', (month_i) => {
                expect(actual.weekdays[year+''][month_i]).toEqual(expected.weekdays[year+''][month_i]);
            });
        });

        test('calendar object', () => {
            expect(actual.dayRanges).toEqual(expected.dayRanges);
            expect(actual.weekdays).toEqual(expected.weekdays);
        });

        test.skip('buses object', () => {
            expect(actual.buses).toEqual(expected.buses);
        });

        test.skip('buses.ZGC2LX with days', () => {
            expect(actual.buses.ZGC2LX).toEqual(expected.buses.ZGC2LX);
        });

        test('buses.ZGC2LX without days', () => {
            expect(actual.buses.ZGC2LX.map(dropDays)).toEqual(expected.buses.ZGC2LX.map(dropDays));
        });

        test.skip('buses.LX2ZGC with days', () => {
            expect(actual.buses.LX2ZGC).toEqual(expected.buses.LX2ZGC);
        });

        test('buses.LX2ZGC without days', () => {
            expect(actual.buses.LX2ZGC.map(dropDays)).toEqual(expected.buses.LX2ZGC.map(dropDays));
        });

        test('busesLXSubway object', () => {
            expect(actual.busesLXSubway).toEqual(expected.busesLXSubway);
        });

        test('stops object', () => {
            expect(actual.stops).toEqual(expected.stops);
        });

        test('busTypes object', () => {
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