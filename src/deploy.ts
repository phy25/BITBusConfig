import fs from 'fs';
import { exit } from 'process';
import fetch from 'node-fetch';
import * as versionData from '../data/version';

const UPLOAD_URL = 'https://phy25.com/p/BITbusWeApp/upload-json.php';
const BB_TOKEN = process.env.BB_TOKEN;

if (!BB_TOKEN) {
    console.error('Empty BB_TOKEN');
    exit(4);
}

function upload_lang(lang: string, next: Function) {
    let path = "./build/"+lang+".json";

    let body = fs.readFileSync(path, {encoding: 'utf8'});
    let bodyJson = JSON.parse(body);
    let version = bodyJson['version'];
    let hl = bodyJson['hl'];

    if (!body || !version || !hl) {
        console.error(`Empty parameters: version = ${version}, hl = ${hl}`);
        exit(2);
    }

    console.log(version, hl);

    fetch(UPLOAD_URL + '?version='+version+'&hl='+hl, {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+BB_TOKEN,
        }
    }).then(function(response: any){
        response.json().then(
            function (data: any) {
                if (data.errcode == 0) {
                    console.log(data);
                    next(data);
                } else {
                    handlePromiseError(data);
                }
            }
        ).catch(handlePromiseError);
    }).catch(handlePromiseError);
}

function handlePromiseError(err: any){
    console.error(err);
    exit(3);
}

function upload_lang_chain(i: number) {
    upload_lang(versionData.lang[i], function(){
        if (i+1 < versionData.lang.length) {
            upload_lang_chain(i+1);
        }
    });
}

if (versionData.lang.length) {
    upload_lang_chain(0);
} else {
    console.error("No versionData.lang available");
    exit(1);
}
