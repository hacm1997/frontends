/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { getBlogFiltered } from "../../../../pages/api/blogs/getAllBlogs";
import { TypeDataBlogsResponse } from "../../../../pages/api/blogs/type";
import { format } from "date-fns";
import { es } from 'date-fns/locale'
import Link from "next/link";
import ReactPaginate from 'react-paginate'


const AllBlogsComponent = () => {
    const [blogData, setBlogdata] = useState<TypeDataBlogsResponse[]>()
    const [isClient, setIsClient] = useState(false);
    const [totalPage, setTotalPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getBlogFiltered(currentPage, 6).then(res => {
            setTotalPage(res.totalPages)
            setBlogdata(res.data)
        }).catch((error) => {
          console.log(error); 
        })
    }, [])

    const handlePageClick = (event: any) => {
        setCurrentPage(event.selected +1)
    }

    useEffect(() => {
        getBlogFiltered(currentPage, 6).then(res => {
          setBlogdata(res.data)
        }).catch((error) => {
            console.log(error)
        })
      }, [currentPage])

    const truncateHTML = (html: string, maxLength: number): string => {
        if (!isClient) {
            return '';
        }

        const doc = new DOMParser().parseFromString(html, 'text/html');
        const truncatedText = doc.body.textContent?.trim().slice(0, maxLength);
        return truncatedText || '';
    };

    return(
        <>
        <div className="">

            <div className="flex justify-center items-center py-8 lg:py-28 ">
                <h1 className=" text-2xl lg:text-[38px] text-[#004477] font-bold">Nuestros Blogs</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="md:grid grid-cols-2 xl:grid-cols-3 lg:grid-rows-2  gap-10 lg:w-[80%] ">
                {blogData?.map((card:TypeDataBlogsResponse) => (
                    <div key={card.id} className=" rounded-xl mx-4 sm:mx-2 mt-4 md:mt-0 ">
                        <div className={"bg-white flex flex-col justify-center items-center max-w-lg rounded-3xl h-[550px] overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]  " + styles.card }>
                        <img className="w-[80%] object-cover rounded-xl" src={card.image} alt={card.title} />
                        <div className="px-6 py-4">
                            <p className='text-xs pb-2'>{card?.createdAt ? format(new Date(card?.createdAt as string), 'dd MMMM yyyy',{locale: es}) : null}</p>
                            <div className="font-bold text-xl mb-2 text-[#004477]"> <p>{card.title} </p></div>
                            <p
                            className="text-gray-700 lg:text-base text-justify text-sm"
                            dangerouslySetInnerHTML={{
                                __html: card.content.slice(0, 150)+'...',
                            }}
                            />
                        </div>
                        <div className="px-6 py-4 w-full flex justify-start">
                        <Link href={`/blog/blog-page/${card.id}`} title={card.title}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Leer más
                            </button>
                        </Link>
                        </div>
                        </div>
                    </div>    
                ))}
                </div>
            </div>
            <div className="flex justify-center items-center py-8">
                <ReactPaginate
                    breakLabel="..."
                    pageCount={totalPage}
                    previousLabel={'<'}
                    nextLabel={'>'}
                    onPageChange={handlePageClick}
                    containerClassName={'list-none flex justify-center p-5 m-8 text-gray-600 font-bold cursor-pointer text-2xl '+styles.paginationsBtns}
                    activeClassName='bg-blue-700 text-white rounded-lg px-[5px]'
                    disabledClassName='text-white rounded-lg'
                    previousClassName='font-bold text-2xl text-blue-700 px-[20px]'
                    nextClassName='font-bold text-2xl text-blue-700 px-[20px]'
                />
            </div>
        </div>
        </>
    )
}

export default AllBlogsComponent