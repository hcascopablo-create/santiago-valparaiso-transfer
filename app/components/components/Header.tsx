export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">

        <div>
          <h1 className="font-bold text-xl text-slate-900">
            SANTIAGO
          </h1>

          <p className="text-xs tracking-widest text-slate-700">
            VALPARAISO TRANSFER
          </p>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-800">

          <a href="#">Home</a>

          <a href="#how">How it works</a>

          <a href="#faq">FAQ</a>

          <a href="#contact">Contact</a>

        </nav>

        <div className="font-semibold text-green-600">
          +56 9 3236 0009
        </div>

      </div>
    </header>
  );
}