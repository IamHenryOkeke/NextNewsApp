import React from 'react'
import axios from 'axios'
import Articles from '@/components/Articles'
import EveryThingSearch from '@/components/EveryThingSearch'
import { EverythingSearchParamsProptypes } from '@/types/types'

async function getData(q: string, sources: string) {
  let url = `https://newsapi.org/v2/everything?q=${q}&apiKey=${process.env.API_KEY}`
  if (sources) {
    url = `https://newsapi.org/v2/everything?q=${q}&category=${sources}&apiKey=${process.env.API_KEY}`
  }
  try {
    const res = await axios(url)
    const result = res.data.articles
    const data = result.filter((item: any) => item.source.name != '[Removed]')
    const newData = data.map((item: any, i: any) => ({ ...item, id: i }))
    return newData
  } catch (error) {
    throw new Error("Resource not found")
  }
}

export default async function page({ searchParams }: EverythingSearchParamsProptypes) {
  const data = await getData(searchParams.q, searchParams.sources)
  return (
    <div>
      <EveryThingSearch />
      <Articles data={data} />
    </div>
  )
}
