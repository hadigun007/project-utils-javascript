const fs = require('fs');


export function saveToJson (data:Object, name:string) {
   
      const jsonData = JSON.stringify(data);

      fs.writeFile(name, jsonData, (err:any) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('Data has been written to ' + name);
        }
      });

}