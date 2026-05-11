

const CTA = () => {
  return (
<div>
<section
  className="overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80')",
  }}
>    
    <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="flex flex-col justify-center items-center text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Fresh Groceries</h2>

      <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
        Experience the convenience of online grocery shopping with us. Fresh produce, pantry essentials, and more delivered right to your doorstep.
      </p>

      <div className="mt-4 sm:mt-8">
        <a href="#" className="inline-block rounded-full bg-amber-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-amber-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden">
          Get Yours Today
        </a>
      </div>
    </div>
  </div>
</section></div>
  )
}

export default CTA