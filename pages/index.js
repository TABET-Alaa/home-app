import Head from 'next/head'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import ExploreCard from '../components/ExploreCard'
import Footer from '../components/Footer'
import Header from '../components/Header'


export default function Home({exploreData, cardsData} ) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">
            Explore 
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({img, distance, location}) => (
              <ExploreCard 
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8 ">Live Anywhere </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({img, title}) => (
              <Cards key={img} img={img} title={title}/>
              ))
            }
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch("https://www.jsonkeeper.com/b/N14L")
                            .then((response) => response.json());
  
  const cardsData = await fetch("https://www.jsonkeeper.com/b/D4QO")
                          .then((response) => response.json())

  return {
    props: {
      exploreData,
      cardsData
    }
  }

}
