import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Revive Foods</title>
        <meta name="description" content="Revive Foods Wholesale Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="">
          Get started by editing{' '}
        </p>
      </main>
    </div>
  )
}
