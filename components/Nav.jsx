"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const { data : session} = useSession();

  const [providers, setProviders] = useState(null);

  const [toggleDropDown, settoggleDropDown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const  response = await getProviders();
      setProviders(response);
    }
    setUpProviders();
  }, []);

  return (
    <nav className=" flex-between w-full mb-16 pt-3  ">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/icons/quill.svg"               
          alt=" Arz Kiya hai "                   //To change
          width={40}
          height={40}
          className=" object-contain "
         />
         <p className="logo_text">कलम</p>
      </Link>

      

      {/* Desktop Navigation*/} 
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5 ">
            <Link href="/create-post" className="black_btn">
              नई कविता लिखे  
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}        // to change
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
               />
            </Link>
          </div>
        ):(
          <>
            {
              providers && 
                Object.values(providers).map((provider) => (
                  <button 
                    type="button" 
                    key={provider.name} 
                    onClick={() => signIn(provider.id)}
                    className="black_btn">
                      Sign In 
                  </button>
                ))
            }
          </>
        )}
      </div>

      {/* Moblile Navigation*/} 
      <div className="sm:hidden flex relative">
            {session?.user ? (
              <div className="flex ">
                <Image
                src={session?.user.image}        // to change
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                  onClick={() => settoggleDropDown((prev) => !prev)}
                />

                {toggleDropDown && (
                  <div className="dropdown">
                      <Link 
                        href="/profile"
                        className="dropdown_link"
                        onClick={() => settoggleDropDown(false)}
                      >
                        मेरी कविताएं 
                      </Link>
                      <Link 
                        href="/create-post"
                        className="dropdown_link"
                        onClick={() => settoggleDropDown(false)}
                      >
                        नई कविता लिखे                                   {/* to change*/}
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          settoggleDropDown(false);
                          signOut();
                        }}
                        className="mt-5 w-full black_btn"
                      >
                        Sign Out
                      </button>
                  </div>
                )}

              </div>
            ) : (
              <>
                {
                  providers && 
                    Object.values(providers).map((provider) => (
                      <button 
                        type="button" 
                        key={provider.name} 
                        onClick={() => signIn(provider.id)}
                        className="black_btn">
                          Sign In 
                      </button>
                    ))
                }
          </>
            )}
      </div>
      
    </nav>
  );
};

export default Nav