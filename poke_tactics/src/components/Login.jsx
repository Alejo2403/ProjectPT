import React, { useState } from 'react'

import appFirebase from '../credentials'
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth =getAuth(appFirebase)


const Login = () => {

    const [registered,setregistered] = useState(false)

    const funcauthentication = async(e)=>{
        e.preventDefault();
        const takeemail = e.target.email.value;
        const takepassword = e.target.password.value;
        const takeconfirmPassword=e.target.confirmPassword.value;

        console.log(takeemail);
        const isAlphanumeric = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/.test(takepassword);
        if (!isAlphanumeric) {
            alert("La contraseña debe ser alfanumérica");
            return;
        }
        if(registered && takepassword !== takeconfirmPassword){
            alert("Las contraseñas no coinciden");
            return;
        }
        try{
            if(registered){
                await createUserWithEmailAndPassword(auth,takeemail,takepassword);
                alert("Cuenta creada correctamente");
            }else{
                await signInWithEmailAndPassword(auth,takeemail,takepassword);
                alert("Inicio de sesión exitoso");
            }
        } catch(error) {
            alert("Error: " + error.message);
        }
    }

    return (
        <div className="bg-[var(--Lblue-pri)] flex items-center justify-center w-full h-screen">
            <section className="p-8 sm:p-0 flex max-w-[1000px] relative justify-center">
                <div className="bg-[var(--Lleft-pri)] w-[45%] pt-5 pb-5 pl-8 pr-8 rounded-3xl items-center z-10 -mr-14 hidden sm:block">
                    <div className=''>
                        <img src="/src/assets/images/LogoTCW.png" alt="Logo" className="h-18 mb-4"></img>
                    </div>
                    <div className="items-center">
                        <h1 className="mb-5 text-4xl font-semibold text-[var(--Ltitle)]">¡Domina el mundo <p className='text-[var(--LtitlePokemon)] font-extrabold'>Pokémon</p> carta por carta!</h1>
                        <p className='text-2xl text-[var(--Lright-pri)]  mb-10'>La colección Pokémon definitiva está aquí. Atrapa cada rareza, completa tus sets y conviértete en leyenda.
    ¿Qué joya añadirás hoy?</p>
                    </div>
                </div>
                <div className="bg-[var(--Lright-pri)] w-[55%] flex flex-col p-7 items-center sm:pt-14 sm:pb-14 sm:pl-14 sm:pr-7 rounded-3xl sm:w-[55%] w-full">
                    <h1 className='text-3xl sm:text-5xl font-extrabold text-center justify-center flex' >{registered ? "Sign up here" : "Login"}</h1>
                    <form onSubmit={funcauthentication} className='flex flex-col w-[100%] sm:w-[70%] gap-5'>
                        <div className="mt-10 relative">
                            <input placeholder="Username" type="email" id="email" required className='border-solid border-black border w-full text-sm  sm:text-xl pt-1 pb-1 pr-8 pl-2 rounded-xl sm:pt-2 sm:pb-2 sm:pr-10 sm:pl-4 shadow-2xl transition delay-150 duration-300 ease-in-out hover:shadow-none'></input>
                            <i className='bx bx-user text-black absolute right-3 top-1/2 transform -translate-y-1/2 text-base sm:text-xl'></i>
                        </div>
                        <div className="relative">
                            <input placeholder="Password" type="password" id="password" minLength={8} required className='border-solid border-black border  w-full text-sm  sm:text-xl pt-1 pb-1 pr-8 pl-2 rounded-xl sm:pt-2 sm:pb-2 sm:pr-10 sm:pl-4 shadow-2xl transition delay-150 duration-300 ease-in-out hover:shadow-none'></input>
                            <i className='bxr bx-lock-keyhole text-black absolute right-3 top-1/2 transform -translate-y-1/2 text-base sm:text-xl'></i>
                        </div>
                        {registered &&(
                            <div className="relative">
                                <input placeholder="Password" type="password" id="confirmPassword" minLength={8} required className='border-solid border-black border  w-full text-sm  sm:text-xl pt-1 pb-1 pr-8 pl-2 sm:pt-2 sm:pb-2 sm:pr-10 sm:pl-4 rounded-xl shadow-2xl transition delay-150 duration-300 ease-in-out hover:shadow-none'></input>
                                <i className='bxr bx-lock-keyhole text-black absolute right-3 top-1/2 transform -translate-y-1/2 text-base sm:text-xl'></i>
                                </div>
                        )}
                        <button className='bg-black text-white m-2 sm:mt-5 text-xl rounded-xl pt-1 pb-1 pr-2 pl-2 ms:pt-2 sm:pb-2 sm:pr-2 sm:pl-2 sm:mb-3 cursor-pointer'>{registered ? "Sign Up" : "¡Login!"}</button>
                    </form>
                    <p className='text-center text-sm sm:text-base'> {registered ? "You already have an account?" : "Don't have an account?"}  <span className="text-[var(--LtitlePokemon)] cursor-pointer" onClick={()=> setregistered(!registered)}>{registered ? "Go to Login" : "Sign up here"}</span></p>
                    <p className='text-sm sm:text-base'>OR</p>
                    <p className='text-center text-sm sm:text-base'>Sign up with Google</p>
                </div>
            </section>
        </div>
    )
}

export default Login;