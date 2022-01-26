import fetch from 'node-fetch'

import { setTimeout } from 'timers/promises'

async function vote () {
    const response = await fetch("https://polls.polldaddy.com/vote-js.php?p=10991674&b=2&a=50512805,&o=&va=16&cookie=0&tags=10991674-src:poll-oembed-simple&n=6a82486176|977&url=https%3A//cdn.iframe.ly/api/iframe%3Furl%3Dhttps%253A%252F%252Fpoll.fm%252F10991674%26key%3D19eb74074f5ecbc09ceba1df9c25110f%26v%3D1%26app%3D1&captcha=1", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,es;q=0.8",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "script",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "cross-site",
            "cookie": "pd-captcha_poll_6500BE6558B99DC997CE85780CBB59BD=1",
            "Referer": "https://cdn.iframe.ly/",
            "Referrer-Policy": "origin"
        },
        "body": null,
        "method": "GET"
    });
    console.log(response)
}

const totalVotes = 1000;
let voteCounter = 0 ;
while ( voteCounter < totalVotes ) {
    await setTimeout(100, vote())
    console.log(voteCounter)
    voteCounter++
}
console.log('done')
