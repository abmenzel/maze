import Head from 'next/head'
import ProductRow from '../components/row/ProductRow'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maze</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductRow title="These were bought this week"/>
      
    </div>
  )
}
