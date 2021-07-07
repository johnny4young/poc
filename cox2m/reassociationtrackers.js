import dotenv from 'dotenv'
import { callHttpRequest } from './util/util.js';
import csv from 'csvtojson'

dotenv.config()


const id_token = process.env.ID_TOKEN
const url_api = process.env.URL_API_ASSOCIATION

async function main() {
  const data = await csv()
    .fromFile( './reassociationtrackers.csv' )

  data.forEach( async (item) => {
    const body = {
      "assetId":item.VIN,
      "trackerId": item.EUI,
      "vin":item.VIN,
      "siteId": "knvl"
    }   
    try {
      await callHttpRequest(url_api , 'POST', body , id_token )    
    } catch (error) {
      console.log(error.message)
    }     
  })

  console.log(data[0])
  console.log(id_token)
  console.log(url_api)
}

await main()

