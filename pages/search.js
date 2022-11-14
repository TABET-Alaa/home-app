import { useRouter } from 'next/router';
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from "date-fns";
import InfoCard from '../components/InfoCard';


function Search({ result }) {

    const router = useRouter();
    const { location, startDate, endDate, numberOfGuests } = router.query;
    const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formatedStartDate} -- ${formatedEndDate} `
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numberOfGuests} personne`} />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">+50 resultat - {range}  - pour {numberOfGuests} nombre de personne</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">filtre</p>
                        <p className="button">filtre</p>
                        <p className="button">filtre</p>
                        <p className="button">filtre</p>
                        <p className="button">filtre</p>
                        <p className="button">filtre</p>
                    </div>

                    <div className="flex flex-col">
                        {result.map(({ img, location, title, description, star, price, total }) => (
                            <InfoCard
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const result = await fetch("https://www.jsonkeeper.com/b/KRL7")
        .then(res => res.json());

    return {
        props: {
            result
        }
    }
}
