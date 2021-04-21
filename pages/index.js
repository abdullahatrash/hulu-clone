import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from "../utils/requests"


export default function Home({ results }) {

  console.log(results)
  return (
    <div>
      <Head>
        <title>hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      
      <Header />
     
      <Nav />
    
      <Results results={results}  />

    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  //const API_KEY = process.env.API_KEY;
  const results = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTopRated.url}`)
    .then((res) => res.json())

    
  return {
    props:
    {results: results.results}
  }
} 


