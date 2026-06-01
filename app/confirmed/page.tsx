export default function ConfirmedPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <div className="max-w-3xl mx-auto px-6 py-20">

        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

          <div className="text-7xl mb-6">
            ✅
          </div>

          <h1 className="text-5xl font-bold mb-4">
            Booking Confirmed!
          </h1>

          <p className="text-gray-600 mb-8">
            Thank you for your reservation.
            We will contact you shortly via WhatsApp.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">

            <p className="font-semibold">
              WhatsApp Contact
            </p>

            <p className="text-green-700 font-bold">
              +56 9 3236 0009
            </p>

          </div>

          <div className="bg-slate-50 rounded-2xl p-6 text-left">

            <h2 className="font-bold mb-4">
              Transfer Summary
            </h2>

            <p>Santiago ↔ Valparaíso</p>

            <p>Private Vehicle</p>

            <p>Up to 4 Passengers</p>

            <p>Up to 4 Suitcases</p>

            <p className="mt-6 text-2xl font-bold text-blue-700">
              USD 150
            </p>

          </div>

          <a
            href="/"
            className="inline-block mt-8 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold"
          >
            Return Home
          </a>

        </div>

      </div>

    </main>
  );
}