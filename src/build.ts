import { DataBusPatternCalendarByMonth, DataBusPatternCalendarByYear, DataJson } from "./models";
import { BusPatternCalendarYear } from "./modelsCalendar";

async function importValidatedCalendar(): Promise<any> {
    const calendarData = await import("../data/calendar");

    if (!calendarData.busPatternCalendar[calendarData.dayRanges[0].substring(0, 4)] ||
        !calendarData.busPatternCalendar[calendarData.dayRanges[1].substring(0, 4)]){
            throw new Error("dayRanges year does not exist in busPatternCalendar: " + calendarData.dayRanges);
        }

    for (var year in calendarData.busPatternCalendar as DataBusPatternCalendarByYear) {
        let yearCalendar = calendarData.busPatternCalendar[year];
        let yearCalendarArr: DataBusPatternCalendarByMonth;
        if (yearCalendar instanceof BusPatternCalendarYear) {
            yearCalendarArr = yearCalendar.toJSON();
        } else {
            yearCalendarArr = yearCalendar;
        }
        [...Array(12).keys()].forEach(i => {
            let expected = new Date(+year, i+1, 0).getDate();
            let actual = yearCalendarArr[i].length;
            if (expected !== actual) {
                throw new Error("Generated busPatternCalendar does not have enough data in " + year + "/" + (i+1));
            }
        });
    }

    return calendarData;
}

export async function generateFile(lang: string): Promise<DataJson> {
    const versionData = await import("../data/version");
    const calendarData = await importValidatedCalendar();
    const langData = await import("../data/" + lang + "/lang");
    return {
        "version": versionData.data,
        "hl": lang,
        "lang": langData.data,
        "dayRanges": calendarData.dayRanges,
        "weekdays": calendarData.busPatternCalendar,
    };
};