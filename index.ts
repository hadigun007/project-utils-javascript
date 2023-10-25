import {saveToJson} from './string_to_json'

let data:Object = {
"name":"hadi",
"usia":24
}

saveToJson(data, 'result/contoh.json')