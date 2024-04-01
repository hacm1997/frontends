import { FilterSlider } from '../../InfoSliders/sliders'
import { FiltersSliders } from './FiltersSliders'

const SliderFilters = () => {
  return (
    <div>
      <FiltersSliders slider={FilterSlider} initialSlide={2}/>
    </div>
  )
}

export default SliderFilters
