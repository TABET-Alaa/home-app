import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function search() {
    return (
        <div>
            <Header />

            <main className="flex">
                <section>
                    <p className="text-xs">+50 Stays for 4 nombre of guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>

                    <div>
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">
                            Cancelation flexibility 
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default search
