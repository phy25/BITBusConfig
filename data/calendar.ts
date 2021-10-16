import { DataBusPatternCalendarByYear } from "../src/models";
import * as busPatternCalendar2020 from "./calendar2020";
import * as busPatternCalendar2021 from "./calendar2021";
import * as busPatternCalendar2022 from "./calendar2022";

export const dayRanges = [
    "2020-01-01",
    "2022-12-31"
];

export const busPatternCalendar: DataBusPatternCalendarByYear = {
    '2020': busPatternCalendar2020.data,
    '2021': busPatternCalendar2021.data,
    '2022': busPatternCalendar2022.data,
};