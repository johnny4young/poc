// REST API: Top Articles

import axios from 'axios'

const BASE_URL= 'https://jsonmock.hackerrank.com/api/articles?page='

async function topArticles(limit){
  
	const {data: firstResponse } = await axios(BASE_URL + "1")
  let articles = firstResponse.data
  let nextPage = firstResponse.page + 1
  const totalPage = firstResponse.total_pages
  while(nextPage <= totalPage){
    const {data: response } = await axios(BASE_URL + nextPage.toString())
    articles.push(...response.data)
    nextPage++
  }
  
  const query =articles
    .filter(article => article.title !== null || article.story_title !== null)
  	.map(article =>  ({
    	...article,
    	showName : article.title !== null ? article.title : article.story_title
  	}))
  	.sort((article1, article2) => {
      const comparatorResult = article2.num_comments - article1.num_comments
      if (comparatorResult === 0 ) return article1.showName >  article2.showName ? -1 : 1
      return comparatorResult
    })
  	.map(article => article.showName)
  	.slice(0, limit)
  	
  console.log(query)
}

//topArticles(3)