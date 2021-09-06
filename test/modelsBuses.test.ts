import { DataBusesListItem } from '../src/models';
import { BusLine, BusScheduleStop } from '../src/modelsBuses';

describe('BusLine', () => {
    test('naive test', () => {
        let busLine: BusLine = new BusLine("L1", 0, 1).addStopsSelf([
            new BusScheduleStop("LXN", 6, 15, 1),
            new BusScheduleStop("LXS", 6, 20, 0),
            new BusScheduleStop("ZGC", 7, 40, 0),
        ]).addDaysSelf([1, 2, 3, 4, 5, 9]);

        let expected: DataBusesListItem = {
            "id": "L1",
            "stops": [
                "LXN",
                "LXS",
                "ZGC"
            ],
            "time": [
                6,
                15,
                6,
                20,
                7,
                40
            ],
            "days": [
                1,
                2,
                3,
                4,
                5,
                9
            ],
            "type": 0,
            "coaches": 1,
            "stopsFade": [
                1,
                0,
                0
            ]
        };

        expect(busLine.toJSON()).toStrictEqual(expected);
    });
});