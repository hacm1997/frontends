import { ABOUT_US, CONTACT_BARRANQUILLA, CONTACT_BARRANQUILLA_21, CONTACT_BARRANQUILLA_41, CONTACT_CARTAGENA, CONTACT_CARTAGENA_SERVITECA, NAVIGATION, SOCIAL_NETWORKS } from '../../data/footerLinks'
import { FooterSection } from './FooterSection'
import { FooterLinks } from './FooterLinks'
import { Accordion } from '../UtilComponents/Accordion'

export const Footer = () => {
  return (
    <footer className="bg-blue-custom">
      <div className="self-stretch w-full mt-16 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="gap-5 flex max-lg:flex-col max-md:items-stretch max-md:gap-0 justify-center items-center">
          {/* Sección "Sobre nosotros" */}
          <div className="flex flex-col items-stretch w-1/5 max-md:w-full max-md:ml-0 justify-center content-center">
            <div className="flex flex-col mt-5 max-md:mt-10 items-center">
              {/* Título y descripción */}
              <div className="flex justify-center text-white sm:justify-start">
                <img src="/icons/logo.webp" alt="Multiltros" />
              </div>
              <p className="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
                <span className='font-semibold'>MULTIFILTROS CARTAGENA SAS</span> es una empresa de producción,
              venta y comercialización de autopartes conformada por un talento humano calificado.
              </p>
              <p className='mt-6 lg:mt-14 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left text-3xl not-italic font-medium'>
          Síguenos
              </p>
              <p className='max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left'>Puedes escribirnos por aquí</p>
              <FooterLinks typeTarget='_blank' links={SOCIAL_NETWORKS} className='mt-8 flex justify-center gap-6 sm:justify-start md:gap-8' />
              {/* Agrega aquí tus íconos de redes sociales */}
            </div>
          </div>
          {/* Sección "Contacto sedes Cartagena" */}
          <div className='flex- flex-col'>

            <div className="items-stretch w-full ml-5 max-md:w-full max-md:ml-0">
              {/* Contenido de la sección "Contacto sedes Cartagena" */}
              <div className='flex flex-col-reverse lg:gird lg:grid-cols-2 xl:flex xl:flex-row gap-16'>
                <div>
                  <FooterSection title='Contacto sedes Cartagena'>
                    <div className='flex flex-col sm:flex xl:flex sm:flex-row gap-8 lg:gap-16 justify-center items-center'>
                      <FooterLinks links={CONTACT_CARTAGENA} title='Multifiltros Cartagena Principal' className='mt-2 lg:mt-8 space-y-4 text-sm hidden sm:block' />
                      <FooterLinks links={CONTACT_CARTAGENA_SERVITECA} title='Multifiltros Cartagena Serviteca' className='mt-2 lg:mt-8 space-y-4 text-sm hidden sm:block' />
                      <Accordion array={CONTACT_CARTAGENA} title='Multifiltros Cartagena Principal' className='block sm:hidden'/>
                      <Accordion array={CONTACT_CARTAGENA_SERVITECA} title='Multifiltros Cartagena Serviteca' className='block sm:hidden'/>
                    </div>
                  </FooterSection>
                </div>
                <div className='flex flex-col sm:flex sm:flex-row gap-8 lg:gap-16 justify-center mt-8 '>
                  <FooterSection title='Navegación'>                  
                    <FooterLinks links={NAVIGATION}  className='mt-2 lg:mt-8 space-y-4 text-sm' />
                  </FooterSection>
                  <FooterSection title='Información Legal'>                  
                    <FooterLinks typeTarget='_blank' links={ABOUT_US}  className='mt-2 lg:mt-8 space-y-4 text-sm' />
                  </FooterSection>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-stretch w-full ml-5 max-md:w-full max-md:ml-0 mt-14">
              {/*Contenido de la sección "Contacto sedes Cartagena" */}
              <FooterSection title='Contacto sedes Barranquilla'>
                <div className='flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row lg:gap-16 justify-center items-center'>
                  <FooterLinks links={CONTACT_BARRANQUILLA} title='Multifiltros Barranquilla' className='mt-2 lg:mt-8 space-y-4 text-sm hidden sm:block' />
                  <FooterLinks links={CONTACT_BARRANQUILLA_41} title='Multifiltros Barranquilla la 41' className='mt-2 lg:mt-8 space-y-4 text-sm hidden sm:block' />
                  <FooterLinks links={CONTACT_BARRANQUILLA_21} title='Multifiltros Barranquilla la 21' className='mt-4 lg:mt-8 space-y-4 text-sm hidden sm:block' />
                  <Accordion array={CONTACT_BARRANQUILLA} title='Multifiltros Barranquilla' className='block sm:hidden'/>
                  <Accordion array={CONTACT_BARRANQUILLA_41} title='Multifiltros Barranquilla la 41' className='block sm:hidden'/>
                  <Accordion array={CONTACT_BARRANQUILLA_21} title='Multifiltros Barranquilla la 21' className='block sm:hidden'/>
                </div>
              </FooterSection>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
