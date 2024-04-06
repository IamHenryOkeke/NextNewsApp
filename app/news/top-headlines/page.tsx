import React from 'react'
import axios from 'axios'
import Articles from '@/components/Articles'
import TopHeadlinSearch from '@/components/TopHeadlinSearch'

interface Proptypes {
  searchParams: {
    country: string,
    category: string
  }
}

async function getData(country: string, category: string) {
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}`
  if (category) {
    url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.API_KEY}`
  }
  try {
    const res = await axios(url)
    const result = res.data.articles
    const data = result.filter((item: any) => item.source.name != '[Removed]')
    return data
  } catch (error) {
    throw new Error("Resource not found")
  }
}

export default async function page({ searchParams }: Proptypes) {
  console.log(searchParams.category, searchParams.country)
  const data = await getData(searchParams.country, searchParams.category)
  return (
    <div>
      <TopHeadlinSearch />
      <Articles data={data} />
    </div>
  )
}
