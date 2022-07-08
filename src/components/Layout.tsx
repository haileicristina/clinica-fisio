import Titulo from "./Titulo";

interface LayoutProps{
    titulo:string;
    children:any;
}

export default function Layout({titulo,children}: LayoutProps){
    return(
        <div className={`
            flex flex-col w-auto
           bg-gray-800 text-gray-100 rounded-md
        `}>
            <Titulo>{titulo}</Titulo>
            <div className='p-6'>
                {children}
            </div>
        </div>
    )
}