import { TimeAsInt } from "../src/modelsDataType";

describe('TimeAsInt', () => {
    test('convert between int and TimeAsInt', () => {
        [...Array(TimeAsInt.MINUTES_PER_DAY).keys()].forEach(int => {
            let timeAsInt = TimeAsInt.fromInt(int);
            let actual = timeAsInt.toJSON();
            expect(actual).toStrictEqual(int);
        });
    });

    test('convert between int and TimeAsInt, step by addMinutes', () => {
        const timeAsInt = TimeAsInt.fromInt(0);
        for (let int = 0; int < TimeAsInt.MINUTES_PER_DAY; int++) {
            let actual = timeAsInt.toJSON();
            expect(actual).toStrictEqual(int);
            if (int < TimeAsInt.MINUTES_PER_DAY - 1) {
                timeAsInt.addMinutes(1);
            }
        }
    });

    test.each([
        [0, 0, 0],
        [1, 0, 60],
        [5, 30, 330],
        [5, 61, 361],
        [23, 59, 1439],
        [23, 60, false],
        [24, 0, false],
        [-1, 0, false],
    ])('constructor %d:%d = %s', (hour, minute, expected) => {
        if (expected !== false) {
            let timeAsInt = new TimeAsInt(hour, minute);
            let actual = timeAsInt.toJSON();
            expect(actual).toStrictEqual(expected);
        } else {
            expect(() => {
                new TimeAsInt(hour, minute);
            }).toThrow();
        }
    });
});