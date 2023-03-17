const request = require("request");
const fs = require('fs');
let result = []
let lat = 0
let lng = 0
let name = ""
let speed = 0
let time = ""

request({
    url:"http://31.207.34.171/api/get_devices?&lang=fr&user_api_hash=$2y$10$FbpbQMzKNaJVnv0H2RbAfel1NMjXRUoCy8pZUogiA/bvNNj1kdcY.",
    json: true
}, (err, response, data) => {
    for (let i = 0; i < 1; i++) {
        for (let k = 0; k < data[0]["items"].length; k++) {
          /*result[k] = ("{"+
            "Latitude " +" : "+
              data[i]["items"][k]["lat"] +", "+
              "\nLongitude " + " : "+
              data[i]["items"][k]["lng"] + ", "+
              "\nName " + " : "+
              data[i]["items"][k]["name"] + ", "+
              "\nTime " + " : "+
              data[i]["items"][k]["time"] + ", "+
              "\nSpeed " + " : "+
              data[i]["items"][k]["speed"] + ", "+"}"
          );*/
          lat = data[i]["items"][k]["lat"] 
          lng = data[i]["items"][k]["lng"]
          name = data[i]["items"][k]["name"]
          time = data[i]["items"][k]["time"] 
          speed = data[i]["items"][k]["speed"]

          result[k] = {
            "latitude":lat,
            "longitude": lng,
            "name":name,
            "time":time,
            "speed":speed
          }
        }
        
        fs.writeFile('result2.json', JSON.stringify({ data: result }), (err) => {
          if (err) throw err;
          console.log('Le fichier a été sauvegardé !');
        });
        /*fs.writeFile('result.json', JSON.stringify({ data: data[i]["items"][k] }), (err) => {
          if (err) throw err;
          console.log('Le fichier a été sauvegardé !');
        });*/
      }
      

})