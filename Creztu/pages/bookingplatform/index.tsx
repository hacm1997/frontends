import { BoostCard } from '../../components/utilsComponents/boostCard.component'
import { DesigUxUi } from '../../components/views/sitioWeb/desigUxUi.component'
import { ExploreWorld } from '../../components/utilsComponents/exploreWorld.component'
import { Innovation } from '../../components/utilsComponents/innovation.component'
import Oportunidad from '../../components/utilsComponents/oportunidad.component'
import Pricing from '../../components/views/sitioWeb/pricing/pricing.component'
import { PrincipalSlider } from '../../components/utilsComponents/principalSlider.component'
import { Seo } from '../../components/views/sitioWeb/seo.component'
import { Tecnologies } from '../../components/utilsComponents/tecnologies.component'
import { WebSite } from '../../components/utilsComponents/webSite.component'
import { inmobiliariaData } from '../../utils/data/inmobiliaria'
import { SecondLayout } from '../../components/general/secondLayout.component'
import { SimpleCard } from '../../components/utilsComponents/simpleCard'


const Index = () => {
  return (
    <SecondLayout>
      <ExploreWorld title={inmobiliariaData.title} videoWeb={inmobiliariaData.videoWeb} bannerButton={inmobiliariaData.bannerButton}
        videoMobile={inmobiliariaData.videoMobile} buttonIcon={inmobiliariaData.buttonIcon} subtitle={inmobiliariaData.subtitle} submenu={inmobiliariaData.submenu}/>
      <div className='mt-14 md:mt-[150px]'>
        <PrincipalSlider galleryData={inmobiliariaData.gallery} />
      </div>
      <BoostCard title={inmobiliariaData.turboBoost.title} subtitle={inmobiliariaData.turboBoost.subtitle} image={inmobiliariaData.turboBoost.image}/>
      <DesigUxUi/>
      <Innovation image={inmobiliariaData.innovation.image}/>
      <div className='mt-1 md:mt-[150px]'>
        <WebSite title={inmobiliariaData.serviceInfo.title} subtitle={inmobiliariaData.serviceInfo.subtitle} image={inmobiliariaData.serviceInfo.image}
          informativeModal={inmobiliariaData.informativeModal} imageMovil={inmobiliariaData.serviceInfo.imageMovil}
        />
      </div>
      <Seo/>
      <SimpleCard title={inmobiliariaData.simpleCard.title} subtitle={inmobiliariaData.simpleCard.subtitle} text={inmobiliariaData.simpleCard.text}
        image={inmobiliariaData.simpleCard.image} icon={inmobiliariaData.simpleCard.icon}
      />
      <Tecnologies principalTitle={inmobiliariaData.technologies.principalTitle} title1={inmobiliariaData.technologies.title1} description1={inmobiliariaData.technologies.description1}
        title2={inmobiliariaData.technologies.title2} description2={inmobiliariaData.technologies.description2} image={inmobiliariaData.technologies.image}
      />
      <Oportunidad title={inmobiliariaData.platform.title} image={inmobiliariaData.platform.image} titlePt2={inmobiliariaData.platform.titlePt2}/>
      <Pricing planes={inmobiliariaData.offerts.plans}/>
    </SecondLayout>
  )
}
export default Index
