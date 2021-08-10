import { BusSingleTimetable } from "../src/modelsSingleTimetable";

describe("BusSingleTimetable", () => {
    test.each([
        [0, 60, 20, [0, 20, 40, 60]],
    ])("addStepTimetableFromInt: %d - %d with step %d", (start, end, step, expected) => {
        const instance = new BusSingleTimetable();
        instance.addStepTimetableFromInt(start, end, step);
        expect(instance.toJSON()).toEqual(expected);
    });
});