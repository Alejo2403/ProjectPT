const PokedexLayout = ({children}) => {
  return (
    <div className="relative min-h-screen">

      <div className="fixed inset-0 -z-10 bg-[url('/FondoTCW.png')] bg-cover bg-center" />

      <main className="relative z-10 p-4">
        {children}
      </main>
    </div>
  )
}

export default PokedexLayout