import { DataJson } from "./models";

export async function generateFile(lang: string): Promise<DataJson> {
    const versionData = await import("../data/version");
    const langData = await import("../data/" + lang + "/lang");
    return {
        "version": versionData.data,
        "hl": lang,
        "lang": langData.data,
    };
};