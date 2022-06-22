import styled from '@emotion/styled'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const App = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-width: 100%;
`
const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
  `

const H1 = styled.h1`
  width: 25rem;
  text-align: center;
  font-size: 4rem;
`

export default function Home() {
  return (
    <App>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main>
          <H1>Welcome to faroles TBR</H1>
      </Main>
    </App>
  )
}
