import Image from 'next/image';
import styles from './banner.module.css';

export default function BannerComponent(props:any){

    const analytic = () =>{
        props.gaEventTracker('Clic Inicio: Agendar cita 1');
    }
    return(
        <>
            <div className={"bg-[url('/images/home/background-home.webp')] bg-no-repeat bg-right "+styles.content}>
                <div className={"flex items-center gap-10 pt-24 w-full "+ styles.general}>
                    <div className={"w-[60%] "+styles.texts} data-aos="fade-right" data-aos-duration="1500">
                        <h1 className={"pl-32 w-4/4 sm:pl-18 "+styles.title}>
                            {props.translate('home:title_banner')}<br/>{props.translate('home:title2_banner')}
                        </h1>
                        <p className={"pl-32 w-4/4 pt-4 sm:pl-18 text-justify "+styles.description}>
                            {props.translate('home:description')} <strong>{props.translate('home:description_strong')}</strong>
                        </p>
                        <div className={"pl-32 w-4/4 pt-4 sm:pl-18 "+ styles.button}>
                            <a onClick={analytic} href='#Form' title='Formulario'>
                                <button>
                                    {props.translate('home:button')}
                                </button>
                            </a>
                        </div>

                    </div>
                    <div className="" data-aos="fade-up" data-aos-duration="1500">
                        <Image className="float-right" src="/images/asesorias/abogaTeam.webp" alt='Aliado-Empresa' title='Background Banner' width={800} height={600}/>
                    </div>
                </div>
            </div>
        </>
    );
}
