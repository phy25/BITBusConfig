import { DataJson } from "./models";

async function importValidatedCalendar(): Promise<any> {
    const calendarData = await import("../data/calendar");

    // TODO: validate

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