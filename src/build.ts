export async function generateFile(lang: string): Promise<any> {
    const langJson = await import("../data/" + lang + "/lang");
    return {"lang": {...langJson.data}};
};