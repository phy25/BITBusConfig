export function generateFile(lang: string): any {
    const langJson = require("../data/" + lang + "/lang.json");
    return {"lang": {...langJson}};
}