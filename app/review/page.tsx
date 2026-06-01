export default function ReviewPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold mb-2">
          Review & Payment
        </h1>

        <p className="text-gray-500 mb-10">
          Please review your transfer details.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow">

            <h2 className="text-2xl font-bold mb-6">
              Transfer Details
            </h2>

            <div className="space-y-4">

              <p><strong>Route:</strong> Santiago → Valparaíso</p>

              <p><strong>Date:</strong> Selected Date</p>

              <p><strong>Time:</strong> Selected Time</p>

              <p><strong>Passengers:</strong> Up to 4</p>

              <p><strong>Suitcases:</strong> Up to 4</p>

            </div>

            <div className="mt-8 text-right">

              <p className="text-4xl font-bold text-blue-700">
                USD 150
              </p>

            </div>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow">

            <h2 className="text-2xl font-bold mb-6">
              Payment Options
            </h2>

            <a
  href="/confirmed"
  className="block text-center w-full bg-yellow-400 py-4 rounded-xl font-bold mb-4"
>
  Continue
</a>

            <div className="border rounded-xl p-6">

              <h3 className="font-bold mb-3">
                Pay by Bank Transfer
              </h3>

              <p>Wise / International Transfer</p>

              <p className="mt-4">
                Contact us on WhatsApp to receive payment instructions.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}