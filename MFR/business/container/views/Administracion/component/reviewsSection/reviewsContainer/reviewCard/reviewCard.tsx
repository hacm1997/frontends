import styles from "./styles.module.css";
import Title from "./title/title";
import Content from "./content/content";
import Star from "./star/star";
import Image from "next/image";

export default function ReviewCard(props: any) {
    return(
        <>

            <div className={styles.card}>
                {/*<Image width={310} height={304} src="/images/testimonio/user.jpg" alt=""/>*/}
                <div className={styles.content}>
                    <Title title={props.title}/>
                   <Content content={props.coment}  />

                    <div className={styles.star}>
                        <Star icon='bx bxs-star'/>
                        <Star icon='bx bxs-star'/>
                        <Star icon='bx bxs-star'/>
                        <Star icon='bx bxs-star'/>
                    </div>
                </div>
            </div>
        </>
    )
}
