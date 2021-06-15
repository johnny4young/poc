import cTable from 'console.table';
import { callHttpRequest } from './util/util.js';

const sites = ["goaa"]

// ["bcaa", "pxaa", "tbaa", "taa", "saaa", "thaa", "bigh", "gcaa", 
// "nash", "daa", "deta", "maa", "mmaa", "ayca", "raa", "scaa", "nvaa", "bwae", 
// "kcaa", "slaa", "maai", "nsaa", "noaa", "pcaa", "miss", "svaa", "caai", "baa", 
// "hata", "aaai", "faa", "keya", "clev", "nwe", "naa", "skya", "dade", "jax", "cade", 
// "ssaa", "fada", "paa"]

const url = 'https://pinpoint-us-api.cox2m.com/v1/trackerCountsByState?siteId='



async function getAllTrackerCountsByState() {
  const bearer = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjM0MjY2OTcsImV4cCI6MTYyMzUxMzA5NywiYXVkIjoiOHRxOVd1RzlIYW9NcElFbFJLbEpydWtmYWJVNGdBSGkiLCJpc3MiOiJodHRwczovL21hbmhlaW0tdXMtYXBpLmNveDJtLmNvbSIsInN1YiI6ImJsdWV8N3k2RDUyZUtFOFVyYnpBM29rOU10WSJ9.5X0rkZSiTm_NwTUEJkWrPrcwuyHQnuTzFdxro5uez-Y'

  try {
    
    const promiseList = sites.map(async(site) => {
      return callHttpRequest(url + site , 'GET', '' , bearer )
    })
    const result = await Promise.all(promiseList)
    console.log('Sites: ', result.length)
    console.log('Site: ', result)

    console.table(result.map( (r,index) =>{
      r.site = sites[index]
      return r
    }));

  } catch (error) {
    console.log(error);
  }
  
}

getAllTrackerCountsByState()