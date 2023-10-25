import { saveToJson } from "./stringToJson"

console.log('hello world')

let data:Object = {
"name":"hadi",
"usia":24
}

saveToJson(data, 'contoh.json')