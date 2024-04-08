import axios from "axios"

export async function getData(q: string, sources: string) {
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

export async function getTopHeadlinesData(country: string, category: string) {
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}`
  if (category) {
    url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.API_KEY}`
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