import { DataBusPatternCalendarByYear } from "../src/models";
import * as busPatternCalendar2017 from "./calendar2017";
import * as busPatternCalendar2018 from "./calendar2018";
import * as busPatternCalendar2019 from "./calendar2019";
import * as busPatternCalendar2020 from "./calendar2020";
import * as busPatternCalendar2021 from "./calendar2021";
import * as busPatternCalendar2022 from "./calendar2022";

export const dayRanges = [
    "2017-01-01",
    "2022-08-31"
];

export const busPatternCalendar: DataBusPatternCalendarByYear = {
    '2017': busPatternCalendar2017.data,
    '2018': busPatternCalendar2018.data,
    '2019': busPatternCalendar2019.data,
    '2020': busPatternCalendar2020.data,
    '2021': busPatternCalendar2021.data,
    '2022': busPatternCalendar2022.data,
};