import * as fs from 'fs';
import { generateFile } from './build';
import * as versionData from '../data/version';

async function buildFile(lang: string): Promise<string> {
    const json = await generateFile(lang);
    const path = "./build/"+lang+".json";
    await fs.promises.writeFile(path, JSON.stringify(json, null, 0));
    return path;
}

export async function build(): Promise<string[]> {
    let paths = [];
    for (let i in versionData.lang) {
        paths.push(await buildFile(versionData.lang[i]));
    }
    return paths;
}

if (require.main === module) {
    build().then((paths) => {
        console.log("Generated", paths);
    });
}