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

        test('lang object', () => {
            expect(actual.lang).toEqual(expected.lang);
        });

        test.skip('whole object', () => {
            expect(actual).toEqual(expected);
        });
    });
});