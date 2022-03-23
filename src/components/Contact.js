import React from "react";
import { MailIcon } from "@heroicons/react/solid"
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export default function Contact() {

    

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-full text-center md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Get in Touch
                    </h2>
                    <p className="leading-relaxed mb-5">
                        Feel free to connect with me via LinkedIn or E-Mail.
                    </p>
                    <div><MailIcon className="w-10 inline-block mb-4 cursor-pointer hover:text-orange-400" onClick={() => window.location = 'mailto:drenth.marijke@gmail.com'}/>
                    <a href="https://www.linkedin.com/in/marijke-drenth/"><AiFillLinkedin className="w-10 inline-block mb-4 text-3xl hover:text-orange-400" /></a>
<a href="https://github.com/mldrenth"><AiFillGithub className="w-10 inline-block mb-4 text-3xl hover:text-orange-400"/></a></div>

                </div>


            </div>
        </section>
    );
}