

export default function Home() {
  return (
    <main>

      

      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
      
       <div className="absolute inset-0 bg-black/40"></div>

        {/* HEADER */}

        <header className="relative z-20">
          <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">

            <div>
              <h1 className="font-bold text-xl text-white">
                SANTIAGO
              </h1>
              <p className="text-sm text-white">
                VALPARAISO TRANSFER
              </p>
            </div>

            <div className="font-semibold text-white">
              +56 9 3236 0009
            </div>

          </div>
        </header>

        {/* CONTENT */}

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT SIDE */}

            <div className="pt-12">

              <p className="uppercase tracking-widest text-white font-semibold">
                Private Transfer
              </p>

              <h2 className="mt-4 text-5xl md:text-7xl font-bold text-white leading-tight">
                Between
                <br />
                Santiago &
                <br />
                Valparaíso
              </h2>

              <p className="mt-8 text-xl text-white max-w-xl">
                Safe. Comfortable. Fixed price.
                Private transportation between Santiago and
                Valparaíso for up to 4 passengers.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-6 max-w-lg">

                <div>
                  <p className="text-white">Private Vehicle</p>
                </div>

                <div>
                  <p className="text-white">24/7 Service</p>
                </div>

                <div>
                  <p className="text-white">4 Passengers</p>
                </div>

                <div>
                  <p className="text-white">4 Suitcases</p>
                </div>

              </div>

            </div>

            {/* BOOKING CARD */}

            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full ml-auto">

              <h3 className="text-3xl font-bold">
  Book Your Transfer
</h3>

<p className="text-gray-500 mt-2 mb-8">
  Santiago ↔ Valparaíso • Private Service
</p>

              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Pickup Hotel / Airbnb"
                  className="w-full border rounded-xl p-4"
                />

                <select className="w-full border rounded-xl p-4">
                  <option>Santiago → Valparaíso</option>
                  <option>Valparaíso → Santiago</option>
                </select>

                <div className="grid grid-cols-2 gap-4">

                  <input
                    type="date"
                    className="border rounded-xl p-4"
                  />

                  <input
                    type="time"
                    className="border rounded-xl p-4"
                  />

                </div>

                <div className="grid grid-cols-2 gap-4">

                  <select className="border rounded-xl p-4">
                    <option>1 Passenger</option>
                    <option>2 Passengers</option>
                    <option>3 Passengers</option>
                    <option>4 Passengers</option>
                  </select>

                  <select className="border rounded-xl p-4">
                    <option>1 Suitcase</option>
                    <option>2 Suitcases</option>
                    <option>3 Suitcases</option>
                    <option>4 Suitcases</option>
                  </select>

                </div>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-xl p-4"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-xl p-4"
                />

                <input
                  type="text"
                  placeholder="WhatsApp Number"
                  className="w-full border rounded-xl p-4"
                />

              </div>

              <div className="mt-8 flex justify-between items-center">

                <div>
                  <p className="text-sm text-gray-500">
                    Fixed Price
                  </p>

                 <p className="text-5xl font-bold text-blue-700">
  USD 150
</p>

<p className="text-sm text-gray-500">
  Per vehicle • Up to 4 passengers
</p>
                </div>

              </div>

              <a
  href="/review"
  className="block text-center w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold"
>
  Check Availability
</a>

            </div>

          </div>

        </div>

      </section>
      <footer className="bg-slate-900 text-white py-16">
  <div className="max-w-7xl mx-auto px-8">

    <div className="grid md:grid-cols-3 gap-10">

      <div>
        <h3 className="font-bold text-xl mb-4">
          Santiago Valparaíso Transfer
        </h3>

        <p className="text-gray-300">
          Private transportation between
          Santiago and Valparaíso.
        </p>
      </div>

      <div>
        <h3 className="font-bold mb-4">
          Service
        </h3>

        <ul className="space-y-2 text-gray-300">
          <li>Santiago → Valparaíso</li>
          <li>Valparaíso → Santiago</li>
          <li>24/7 Availability</li>
          <li>Private Transfer</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-4">
          Contact
        </h3>

        <p>WhatsApp</p>
        <p>+56 9 3236 0009</p>
      </div>

    </div>

  </div>
</footer>

<a
  href="https://wa.me/56932360009"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-xl font-bold z-50"
>
  WhatsApp
</a>
    </main>
  );
}