import { TeamSlider } from '../../InfoSliders/sliders'
import { FiltersSliders } from './FiltersSliders'

const SliderTeams = () => {
  return (
    <section className="flex flex-col items-center">
      <header className="flex gap-3 my-16 self-center max-md:max-w-full max-md:flex-wrap max-md:my-4">
        <div className="bg-red-500 flex w-2 shrink-0 h-[50px] flex-col rounded-[50px]"/>
        <h2 className="text-blue-950 text-[28px] font-bold self-center grow whitespace-nowrap ">
            El equipo de multifiltros
        </h2>
      </header>
      <FiltersSliders slider={TeamSlider} initialSlide={1} />
    </section>
  )
}

export default SliderTeams
