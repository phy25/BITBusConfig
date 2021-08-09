import { BITBusPatternCalendarYear } from "../src/modelsCalendar";
import { getLocalDateFromString } from "../src/modelsDataType";

export const data = new BITBusPatternCalendarYear(2021);

data.addSemesterRules(
    getLocalDateFromString('2021-01-31'),
    getLocalDateFromString('2021-02-27'), // should be corrected to 02-26
    getLocalDateFromString('2021-07-04'),
    getLocalDateFromString('2021-08-28'), // should be corrected to 08-20
    [36, 41, 42, 43, 44, 45, 36],
    [0, 0, 0, 0, 0, 0, 0],
);

data.addHolidayOverride(getLocalDateFromString('2021-01-01'), 0);
// missing LX subway https://www.bit.edu.cn/tzgg17/ggxx/6808acbfb5e4472da69b2c0d57fc42ec.htm

// missing holidays

// missing sports special service https://www.bit.edu.cn/tzgg17/ggxx/4761ab03f51c4c5dadfdef01284be06a.htm

// missing exam weeks https://www.bit.edu.cn/tzgg17/ggxx/c30dcce7428b493781e5b1544ae95dcd.htm

// missing summer semester https://www.bit.edu.cn/tzgg17/ggxx/09cbbcd091f64ba8a6bce9d7bdc820eb.htm

data.addLongHolidayRules(
    getLocalDateFromString('2021-10-01'), getLocalDateFromString('2021-10-07'), 0, null,
    [], 0,
);
