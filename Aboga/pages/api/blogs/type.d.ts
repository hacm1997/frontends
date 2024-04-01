export interface TypeGetBlogsResponse {
  data: TypeDataBlogsResponse[]
}

export interface TypeDataBlogs {
  status?: string
  id?: string
  title: string
  image?:string
  content: string
  status: string
  extraInfo: {category: string[]}
}

export interface TypeDataBlogsResponse { 
  status?: string
  createdAt: string
  id?: string
  title: string
  image?:string
  content: string
  status: string
  extraInfo: {category: string[]}
}