import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ReviewCard from "./reviewCard/reviewCard";
import styles from "./styles.module.css";
import useTranslation from "next-translate/useTranslation";


export default function ReviewsContainer() {
    const {t, lang} = useTranslation('comments');
    const items_review = t<any>("general.list", {}, { returnObjects: true });
    console.log('items => ', items_review)
    const list_card =items_review?.map((item:any, index:number) => (
        <SwiperSlide key={index}>
            <ReviewCard title={item.name} coment={item.comment}/>
        </SwiperSlide>
    ))

    return (
        <>
            <div className={styles.card_general}>
                <Swiper
                    spaceBetween={30}
                    breakpoints={
                        {
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            }
                        }
                    }
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {list_card}
                </Swiper>
            </div>
        </>
    )
}