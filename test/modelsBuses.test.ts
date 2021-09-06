import { DataBusesListItem } from '../src/models';
import { BusesDestList, BusLine, BusScheduleDayLineMap, BusScheduleStop, convertKeyToNumber } from '../src/modelsBuses';

describe('BusLine', () => {
    test('naive test', () => {
        let busLine: BusLine = new BusLine("L1", 0, 1).addStopsSelf([
            new BusScheduleStop("LXN", 6, 15, 1),
            new BusScheduleStop("LXS", 6, 20, 0),
            new BusScheduleStop("ZGC", 7, 40, 0),
        ])

        busLine.addDay(1);
        busLine.addDay(2);
        busLine.addDay(3);
        busLine.addDay(4);
        busLine.addDay(5);
        busLine.addDay(9);

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

describe('BusesDestList', () => {
    test('naive test', () => {
        let L1: BusLine = new BusLine("L1", 0, 1).addStopsSelf([
            new BusScheduleStop("LXN", 6, 15, 1),
            new BusScheduleStop("LXS", 6, 20, 0),
            new BusScheduleStop("ZGC", 7, 40, 0),
        ]);

        let L2: BusLine = new BusLine("L2", 0, 1).addStopsSelf([
            new BusScheduleStop("LXN", 7, 15, 1),
            new BusScheduleStop("LXS", 7, 20, 0),
            new BusScheduleStop("ZGC", 8, 40, 0),
        ]);

        let underTest: BusesDestList = new BusesDestList();
        underTest.push(L1);
        underTest.push(L2);

        let scheduleMap: BusScheduleDayLineMap = new Map(Object.entries({
            0: ["L1"],
            1: ["L2"],
            2: [],
            10: ["L1", "L2"],
        }).map(convertKeyToNumber));

        underTest.applySchedule(scheduleMap);

        expect(underTest.getById("L1").days).toStrictEqual([0, 10]);
        expect(underTest.getById("L2").days).toStrictEqual([1, 10]);

        let lineList = underTest.toJSON();
        expect(lineList.length).toBe(2);
    });
});