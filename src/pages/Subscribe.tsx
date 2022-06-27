import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useCreateSubscriberMutation();

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault()

        await createSubscriber({
            variables:{
                name, 
                email,
            }
        })

        navigate('/event');
    }


    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="max-w-[1100px] w-full flex items-center justify-between mt-20 mx-20">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong> 
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">
                        Inscreva-se gratuitamente
                    </strong>        

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                        className="bg-gray-900 rounded px-5 h-14 border border-gray-800"
                        type="text" 
                        placeholder="Seu nome completo" 
                        onChange={event => setName(event.target.value)}
                        />

                        <input 
                        className="bg-gray-900 rounded px-5 h-14 border border-gray-800"
                        type="email" 
                        placeholder="Digite seu e-mail" 
                        onChange={event => setEmail(event.target.value)}
                        />    

                        <button 
                        className="bg-green-500 rounded py-4 h-14 mt-4 text-sm hover:bg-green-700 transition-colors uppercase disabled:opacity-50"
                        disabled={loading}
                        >
                        Garantir a minha vaga    
                        </button>                    
                    </form>                                
                </div>
            </div>
            <img src="/src/assets/code-mockup.png" className="mt-10 max-w-[80vw]" alt="Imagem exemplo de código no VSCode"/>
        </div>
    )
}