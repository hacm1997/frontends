import { SecondLayout } from '../../components/general/secondLayout.component'
import Boost from '../../components/views/home/boost.component'
import ManageCampaigns from '../../components/views/home/manageCampaigns.component'
import Oportunity from '../../components/views/home/oportunity.component'
import UnlockPower from '../../components/views/home/unlockPower.component'
export default function page() {
  return (
    <SecondLayout>
      <ManageCampaigns />
      <Boost />
      <UnlockPower />
      <Oportunity />
    </SecondLayout>
  )
}

