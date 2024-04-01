import { SimpleCard } from '../UtilComponents/SimpleCard'

interface Props {
  items: Items[]
}

interface Items {
  id?: number
  title?: string
  image?: string
  href?: string
  type?: string
}

export const GridCategories = ({ items }: Props) => {
  return (
    <>
      {
        items.map(({ image, title, href, id, type }) => (
          <SimpleCard image={image} title={title} key={id} href={href} type={type} />
        ))
      }
    </>
  )
}

