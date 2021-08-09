import { DataBusPatternCalendarByYear } from "../src/models";
import * as busPatternCalendar2017 from "./calendar2017";
import * as busPatternCalendar2018 from "./calendar2018";
import * as busPatternCalendar2019 from "./calendar2019";

export const dayRanges = [
    "2017-01-01",
    "2021-08-27"
];

export const busPatternCalendar: DataBusPatternCalendarByYear = {
    '2017': busPatternCalendar2017.data,
    '2018': busPatternCalendar2018.data,
    '2019': busPatternCalendar2019.data,
};