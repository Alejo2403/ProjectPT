import React from 'react'

const Login = () => {
    return (
        <div className="bg-[var(--Lblue-pri)] flex items-center justify-center w-full h-screen">
            <section className="flex w-4xl">
                <div className="bg-[var(--Lleft-pri)] w-[45%] pt-5 pb-5 pl-8 pr-8 rounded-4xl">
                    <div className=''>
                        <img src="/src/assets/images/LogoTCW.png" alt="Logo" className="h-18 mb-4"></img>
                    </div>
                    <div className="">
                        <h1 className="mb-5 text-4xl font-semibold text-[var(--Ltitle)]">¡Domina el mundo <p className='text-[var(--LtitlePokemon)] font-extrabold'>Pokémon</p> carta por carta!</h1>
                        <p className='text-2xl text-[var(--Lright-pri)]  mb-10'>La colección Pokémon definitiva está aquí. Atrapa cada rareza, completa tus sets y conviértete en leyenda.
    ¿Qué joya añadirás hoy?</p>
                    </div>
                </div>
                <div className="bg-[var(--Lright-pri)] w-[55%] flex flex-col items-center pt-15 pb-15 pl-8 pr-8 rounded-4xl">
                    <h1 className='text-5xl font-extrabold'>Login</h1>
                    <form>
                        <div className="flex flex-col items-center justify-center">
                            <label>User<input></input></label>
                            <label>password<input></input></label>
                        </div>
                        <button>Longin</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Login;