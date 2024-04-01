import { SecondLayout } from '../../components/general/secondLayout.component'
import { ExploreWorld } from '../../components/utilsComponents/exploreWorld.component'
import { BoostCard } from '../../components/utilsComponents/boostCard.component'
import { DesigUxUi } from '../../components/views/sitioWeb/desigUxUi.component'
import { Innovation } from '../../components/utilsComponents/innovation.component'
import Oportunidad from '../../components/utilsComponents/oportunidad.component'
import Pricing from '../../components/views/sitioWeb/pricing/pricing.component'
import { PrincipalSlider } from '../../components/utilsComponents/principalSlider.component'
import { Seo } from '../../components/views/sitioWeb/seo.component'
import { Tecnologies } from '../../components/utilsComponents/tecnologies.component'
import { WebSite } from '../../components/utilsComponents/webSite.component'
import { EcommerceData } from '../../utils/data/ecommerce'
import { SimpleCard } from '../../components/utilsComponents/simpleCard'


const Index = () => {
  return (
    <SecondLayout>
      <ExploreWorld title={EcommerceData.title} videoWeb={EcommerceData.videoWeb} bannerButton={EcommerceData.bannerButton}
        videoMobile={EcommerceData.videoMobile} buttonIcon={EcommerceData.buttonIcon} subtitle={EcommerceData.subtitle} submenu={EcommerceData.submenu}/>
      <div className='mt-14 md:mt-[150px]'>
        <PrincipalSlider galleryData={EcommerceData.gallery} />
      </div>
      <BoostCard title={EcommerceData.turboBoost.title} subtitle={EcommerceData.turboBoost.subtitle} image={EcommerceData.turboBoost.image}/>
      <DesigUxUi/>
      <Innovation image={EcommerceData.innovation.image}/>
      <div className='mt-1 md:mt-[150px]'>
        <WebSite title={EcommerceData.serviceInfo.title} subtitle={EcommerceData.serviceInfo.subtitle} image={EcommerceData.serviceInfo.image}
          imageMovil={EcommerceData.serviceInfo.imageMovil} informativeModal={EcommerceData.informativeModal}  
        />
      </div>
      <Seo/>
      <SimpleCard title={EcommerceData.simpleCard.title} subtitle={EcommerceData.simpleCard.subtitle} text={EcommerceData.simpleCard.text}
        image={EcommerceData.simpleCard.image} icon={EcommerceData.simpleCard.icon}
      />
      <div className='mt-32'>
        <Tecnologies principalTitle={EcommerceData.technologies.principalTitle} title1={EcommerceData.technologies.title1} description1={EcommerceData.technologies.description1}
          title2={EcommerceData.technologies.title2} description2={EcommerceData.technologies.description2} image={EcommerceData.technologies.image}
        />
      </div>
      <Oportunidad title={EcommerceData.platform.title} image={EcommerceData.platform.image}/>
      <Pricing planes={EcommerceData.offerts.plans}/>
    </SecondLayout>
  )
}
export default Index
