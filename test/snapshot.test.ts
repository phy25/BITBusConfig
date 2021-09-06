import { generateFile } from '../src/build';

describe('JSON snapshot', () => {
    describe.each(['zh', 'en'])('%s', (lang) => {
        let actual: any;
        beforeAll(async () => {
            actual = await generateFile(lang);
        });

        test('whole object', () => {
            expect(actual).toMatchSnapshot();
        });
    });
});