import * as fs from 'fs';
import { generateFile } from './build';

async function buildFile(lang: string): Promise<void> {
    const json = await generateFile(lang);
    await fs.promises.writeFile("./build/"+lang+".json", JSON.stringify(json, null, 0));
}

export async function build(): Promise<void> {
    await buildFile("zh");
}

if (require.main === module) {
    build();
}