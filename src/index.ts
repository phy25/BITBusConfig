import * as fs from 'fs';
import { generateFile } from './build';

async function buildFile(lang: string): Promise<string> {
    const json = await generateFile(lang);
    const path = "./build/"+lang+".json";
    await fs.promises.writeFile(path, JSON.stringify(json, null, 0));
    return path;
}

export async function build(): Promise<string[]> {
    let paths = [];
    paths.push(await buildFile("zh"));
    paths.push(await buildFile("en"));
    return paths;
}

if (require.main === module) {
    build().then((paths) => {
        console.log("Generated", paths);
    });
}