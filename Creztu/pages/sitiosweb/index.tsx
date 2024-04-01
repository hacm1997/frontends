import { SecondLayout } from '../../components/general/secondLayout.component'
import { ExploreWorld } from '../../components/utilsComponents/exploreWorld.component'
import { BoostCard } from '../../components/utilsComponents/boostCard.component'
import { DesigUxUi } from '../../components/views/sitioWeb/desigUxUi.component'
import { Innovation } from '../../components/utilsComponents/innovation.component'
import { NextLevel } from '../../components/views/sitioWeb/nextLevel.component'
import Oportunidad from '../../components/utilsComponents/oportunidad.component'
import Pricing from '../../components/views/sitioWeb/pricing/pricing.component'
import { PrincipalSlider } from '../../components/utilsComponents/principalSlider.component'
import { Seo } from '../../components/views/sitioWeb/seo.component'
import { Tecnologies } from '../../components/utilsComponents/tecnologies.component'
import { WebSite } from '../../components/utilsComponents/webSite.component'
import { SitioWebData } from '../../utils/data/sitioWeb'


const Index = () => {
  return (
    <SecondLayout>
      <ExploreWorld title={SitioWebData.title} videoWeb={SitioWebData.videoWeb} bannerButton={SitioWebData.bannerButton}
        videoMobile={SitioWebData.videoMobile} buttonIcon={SitioWebData.buttonIcon} subtitle={SitioWebData.subtitle} submenu={SitioWebData.submenu}/>
      <div className='mt-14 md:mt-[150px]'>
        <PrincipalSlider galleryData={SitioWebData.gallery} />
      </div>
      <BoostCard title={SitioWebData.turboBoost.title} subtitle={SitioWebData.turboBoost.subtitle} image={SitioWebData.turboBoost.image}/>
      <DesigUxUi/>
      <Innovation image={SitioWebData.innovation.image}/>
      <NextLevel/>
      <div className='mt-1 md:mt-[150px]'>
        <WebSite title={SitioWebData.serviceInfo.title} subtitle={SitioWebData.serviceInfo.subtitle} image={SitioWebData.serviceInfo.image}
          informativeModal={SitioWebData.informativeModal} imageMovil={SitioWebData.serviceInfo.imageMovil} 
        />
      </div>
      <Seo/>
      <Tecnologies principalTitle={SitioWebData.technologies.principalTitle} title1={SitioWebData.technologies.title1} description1={SitioWebData.technologies.description1}
        title2={SitioWebData.technologies.title2} description2={SitioWebData.technologies.description2} image={SitioWebData.technologies.image}
      />
      <Oportunidad title={SitioWebData.platform.title} image={SitioWebData.platform.image}/>
      <Pricing planes={SitioWebData.offerts.plans}/>
    </SecondLayout>
  )
}
export default Index
