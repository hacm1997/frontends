/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { getBlogById, getBlogFiltered } from "../../../../pages/api/blogs/getAllBlogs";
import { TypeDataBlogsResponse } from "../../../../pages/api/blogs/type";
import { format } from "date-fns";
import { es } from 'date-fns/locale'

type BlogPageComponentProps = {
    blogID: string;
    setTitlePage: React.Dispatch<React.SetStateAction<string>>;
};

interface dataRelation {
    data: TypeDataBlogsResponse[]
}

const BlogPageComponent: React.FC<BlogPageComponentProps> = ({ blogID, setTitlePage }) => {
    const [blogDataRelaions, setBlogdataRelation] = useState<dataRelation>()
    const [blogData, setBlogdata] = useState<TypeDataBlogsResponse>()
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const getItem = (id: string) => {
        getBlogById(id).then(res => {
            // console.log(res)
            setBlogdata(res)
            setTitlePage(res.title)
        }).catch(error => {
          console.log(error)
        })
    }

    useEffect(() => {
        if(blogData?.extraInfo?.category){
            getBlogFiltered(1, 4, blogData?.extraInfo?.category).then(res => {
                setBlogdataRelation(res)
            }).catch((error) => {
                console.log(error); 
            })
        }
    }, [blogData?.extraInfo])

    useEffect(() => {
        getItem(blogID)
    }, [blogID])

    // const truncateHTML = (html: string, maxLength: number): string => {
    //     if (!isClient) {
    //       return '';
    //     }
    
    //     const doc = new DOMParser().parseFromString(html, 'text/html');
    //     const truncatedText = doc.body.textContent?.trim().slice(0, maxLength);
    //     return truncatedText || '';
    // }; 

    return (
        <>
            <div className="xl:flex lg:justify-center gap-4 py-8 mx-4 xl:mx-0">
                <div className="xl:w-[60%]">
                    <p className="text-[#004477] text-sm">{blogData?.createdAt ? format(new Date(blogData?.createdAt as string), 'dd MMMM yyyy',{locale: es}) : null}</p>
                    <div className="flex justify-center">
                        <img className='w-full' src={blogData?.image} title={blogData?.title} alt={blogData?.title} />
                    </div>
                    <div className="text-[#004477] font-semibold">
                        <p >Temas: {blogData?.extraInfo?.category.toString().replace(/,/g, ' - ')}</p>
                    </div>
                    <div className='py-5 text-[#004477] font-bold lg:text-2xl'>
                        <h1>{blogData?.title}</h1>
                    </div>
                    <p
                        className="text-gray-700 text-base text-justify "
                        dangerouslySetInnerHTML={{
                            __html: (blogData?.content as string),
                        }}
                    />
                </div>
                <div className="xl:w-[30%] lg:px-5 mt-8">
                    <h4 className="text-xl lg:text-[30px] font-bold text-[#004477] pb-6">Temas relacionados</h4>
                    {blogDataRelaions?.data.filter(des => des.id != blogID).map((item:TypeDataBlogsResponse) => (
                        <div key={item.id}>
                            <a href={`/blog/blog-page/${item.id}`} title={item.title} className="flex gap-2 pb-4">
                                <img className="w-[150px] h-32 object-cover" src={item.image} alt={item.title} />
                                <div>
                                    <h6 className="text-sm text-[#004477] font-bold">{item.title}</h6>
                                    <p className="text-xs text-[#004477] font-semibold">{item?.createdAt ? format(new Date(item?.createdAt as string), 'dd MMMM yyyy',{locale: es}) : null}</p>
                                    {/* <p
                                        className="text-gray-600 text-xs pt-2 text-justify"
                                        dangerouslySetInnerHTML={{
                                            __html: truncateHTML(item.content, 150),
                                        }}
                                    ></p> */}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BlogPageComponent