import Image from "next/image"
import { TechBadge } from "../../tech-badge"
import { Button } from "@/app/components/button"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandYoutube, TbBrandWhatsapp } from 'react-icons/tb'

const MOCK_CONTACTS = [
    {
        url: 'https://github.com/alandrade2',
        icon: <TbBrandGithub />
    },
    {
        url: 'https://linkedin.com/in/andre-luiz-84559a168',
        icon: <TbBrandLinkedin />
    },
    {
        url: 'https://www.youtube.com/@alandrade2/about',
        icon: <TbBrandYoutube />
    },
    {
        url: 'https://github.com/alandrade2',
        icon: <TbBrandWhatsapp />
    }
]


export const UserSection = () => {
    return (
        <section className="w-full h-[755px] bg-home-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                 <p className="font-robot text-2xl">Seja Bem vindo, Meu nome é </p>

                 <h2 className="text-4xl text-emerald-500 font-robot mt-2">André Luiz</h2>

                 <p className="text-gray-400 my-6 font-robot text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquam, hic quam nihil officia ab facere? Perspiciatis praesentium fuga quis harum vero suscipit adipisci repudiandae nulla cumque, nostrum voluptas nesciunt!</p>
                <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px] ">
                    {Array.from({ length: 8}).map((_, index) => (
                        <TechBadge name="Next.js" key={index} />
                    ))}
                </div>

                <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                    <Button className="w-max shadow-button">
                        Entre em contato
                        <HiArrowNarrowRight size={18} />
                    </Button> 
                    <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                    {MOCK_CONTACTS.map((contact, index) => (
                        <a 
                        href={contact.url}
                        key={`contact-${index}`}
                        target="_blank"
                        >
                        {contact.icon}
                        </a>
                    ))}
                    </div>                    
                </div>
            </div>
                <Image
                width={340}
                height={340}
                src="/images/user.png"
                alt="Foto perfil Andre Luiz"
                className="rounded-lg shadow-2xl w-[150px] h-[150px] lg:w-[340px] lg:h-[340px] mb-6 lg:mb-0 object-cover"                    
                />
        </div>
    </section>
    )
}