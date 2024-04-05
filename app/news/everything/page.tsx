import React from 'react'
import axios from 'axios'
import Articles from '@/components/Articles'

interface Proptypes {
  searchParams: {
    query: string
  }
}

async function getData(query: string) {
  try {
    const res = await axios(`https://newsapi.org/v2/everything?q=tech&apiKey=${process.env.API_KEY}`)
    const result = res.data.articles
    const data = result.filter((item: any) => item.source.name != '[Removed]')
    return data
  } catch (error) {
    throw new Error("Resource not found")
  }
}

export default async function page({ searchParams }: Proptypes) {
  const query = searchParams?.query || ''
  const data = await getData(query)
  return (
    <div>
      <Articles data={data} />
    </div>
  )
}
