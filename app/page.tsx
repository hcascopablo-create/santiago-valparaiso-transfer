

"use client";
import { FaWhatsapp } from "react-icons/fa";


import { useState } from "react";

export default function Home() {
  const [pickup, setPickup] = useState("");
const [route, setRoute] = useState("Santiago → Valparaíso");
const [date, setDate] = useState("");
const [time, setTime] = useState("");
const [passengers, setPassengers] = useState("1");
const [suitcases, setSuitcases] = useState("1");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [whatsapp, setWhatsapp] = useState("");
const whatsappMessage = encodeURIComponent(`
NEW BOOKING REQUEST

Name: ${name}

Pickup: ${pickup}

Route: ${route}

Date: ${date}

Time: ${time}

Passengers: ${passengers}

Suitcases: ${suitcases}

Email: ${email}

WhatsApp: ${whatsapp}
`);
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
              <p className="font-bold text-xl text-white">
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

              <p className="uppercase tracking-widest text-white font-bold">
                Private Transfer
              </p>

      <h2 className="mt-4 text-4xl md:text-7xl font-bold text-white leading-tight">
  Private Transfer
  <br />
  Santiago to
  <br />
  Valparaíso
</h2>

<div className="inline-block mt-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold">
  ★ Rated 5 Stars by International Travelers
</div>

              <p className="mt-8 text-xl text-white max-w-xl">
                Private door-to-door transportation between
Santiago, Valparaíso and Viña del Mar.

Fixed price. Up to 4 passengers.
Available 24/7.
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

            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-md lg:max-w-lg mx-auto lg:ml-auto">

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
  Book Your Transfer
</h3>

<p className="text-gray-500 mt-2 mb-8">
  Santiago ↔ Valparaíso • Private Service
</p>

              <div className="space-y-4">

                

 <input
  type="text"
  placeholder="Pickup Hotel / Airbnb"
  value={pickup}
  onChange={(e) => setPickup(e.target.value)}
  className="w-full border rounded-xl p-4"
/>

  <select
  value={route}
  onChange={(e) => setRoute(e.target.value)}
  className="w-full border rounded-xl p-4"
>
    <option>Santiago → Valparaíso</option>
    <option>Valparaíso → Santiago</option>
  </select>

 <input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  className="w-full border border-gray-300 rounded-xl p-4"
/>

  <input
  type="time"
  value={time}
  onChange={(e) => setTime(e.target.value)}
  className="w-full border border-gray-300 rounded-xl p-4"
/>

  <div className="flex flex-col md:grid md:grid-cols-2 gap-4">

    <select
  value={passengers}
  onChange={(e) => setPassengers(e.target.value)}
  className="w-full h-14 border border-gray-300 rounded-xl px-4"
>
      <option>1 Passenger</option>
      <option>2 Passengers</option>
      <option>3 Passengers</option>
      <option>4 Passengers</option>
    </select>

    <select
  value={suitcases}
  onChange={(e) => setSuitcases(e.target.value)}
  className="w-full h-14 border border-gray-300 rounded-xl px-4"
>
      <option>1 Suitcase</option>
      <option>2 Suitcases</option>
      <option>3 Suitcases</option>
      <option>4 Suitcases</option>
    </select>

  </div>

<input
  type="text"
  placeholder="Full Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full border rounded-xl p-4"
/>

  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full border rounded-xl p-4"
  />

  <input
    type="text"
    placeholder="WhatsApp Number"
    value={whatsapp}
    onChange={(e) => setWhatsapp(e.target.value)}
    className="w-full border rounded-xl p-4"
  />

</div>

              <div className="mt-8 flex justify-between items-center">

                <div>
                  <p className="text-sm text-gray-500">
                    Fixed Price
                  </p>

                 <p className="text-6xl font-extrabold text-blue-700">
  USD 180
</p>

<p className="text-sm text-gray-500">
  Per vehicle • Up to 4 passengers
</p>
                </div>

              </div>

              <a
  
  href={`https://wa.me/56932360009?text=${whatsappMessage}`}
  target="_blank"
  rel="noopener noreferrer"
  className="block text-center w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold"
>
  Request Reservation
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

  <div className="mt-10">
    <p className="text-5xl font-bold text-white">
      USD 180
    </p>

    <div className="mt-6 flex justify-center gap-6 text-gray-300 text-sm">
      <span>✓ Secure Booking</span>
      <span>✓ 24/7 Support</span>
      <span>✓ Fixed Price</span>
    </div>

    <p className="text-white mt-2">
      Fixed price per vehicle
    </p>
  </div>
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
  <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center mb-12">
  <div className="text-center mb-12">
  <h2 className="text-4xl font-bold">
    Why Choose Us?
  </h2>
</div>
    </div>

    <div className="grid md:grid-cols-4 gap-8">

      <div className="text-center">
        <h3 className="font-bold text-xl mb-3">
          Fixed Price
        </h3>
        <p>
          No hidden fees. USD 180 per vehicle.
        </p>
      </div>

      <div className="text-center">
        <h3 className="font-bold text-xl mb-3">
          Door to Door
        </h3>
        <p>
          Pickup from any hotel or Airbnb in Santiago.
        </p>
      </div>

      <div className="text-center">
        <h3 className="font-bold text-xl mb-3">
          Private Service
        </h3>
        <p>
          Exclusive vehicle for your group only.
        </p>
      </div>

      <div className="text-center">
        <h3 className="font-bold text-xl mb-3">
          Available 24/7
        </h3>
        <p>
          Day and night transfers every day.
        </p>
      </div>

    </div>

  </div>
</section>


<section className="bg-slate-50 py-20">
  <div className="max-w-6xl mx-auto px-8">

    <h2 className="text-4xl font-bold text-center mb-12">
      Popular Routes
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-6 rounded-2xl shadow">
        Santiago Airport → Valparaíso
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        Santiago Airport → Viña del Mar
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        Santiago Downtown → Cruise Port
      </div>

    </div>

  </div>
</section>

<section className="bg-slate-100 py-20">




  <div className="max-w-6xl mx-auto px-8">

    <h2 className="text-4xl font-bold text-center mb-12">
      Customer Reviews
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-blue p-6 rounded-3xl shadow">
  <p className="text-slate-700">
    "Excellent service. Driver arrived on time and the vehicle was very comfortable."
  </p>

  <p className="mt-4 font-bold text-slate-900">
    ★★★★★ Michael - USA
  </p>
</div>

      <div className="bg-blue p-6 rounded-3xl shadow">
        <p>
          "Easy booking process and great communication through WhatsApp."
        </p>
        <p className="mt-4 font-bold text-slate-900">
          ★★★★★ Sarah - Australia
        </p>
      </div>

      <div className="bg-blue p-6 rounded-3xl shadow">
        <p>
          "The best way to travel between Santiago and Valparaíso."
        </p>
        <p className="mt-4 font-bold text-slate-900">
          ★★★★★ David - UK
        </p>
      </div>

    </div>

  </div>
</section>
</footer>

<a
  href={`https://wa.me/56932360009?text=${whatsappMessage}`}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center z-50"
>
  <FaWhatsapp size={34} />
</a>
    </main>
  );
}