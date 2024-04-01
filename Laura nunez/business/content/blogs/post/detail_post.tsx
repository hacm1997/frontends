import styles from "./styles.module.css";
import {marked} from "marked";
import React from "react";
import moment from "moment/moment";
import Contact from "./contact";
import RelatedTopics from "./related_topics/related_topics";

//Date Format
const day = 'D';
const month = 'MMMM';
const year = 'YYYY';
export default function DetailPost({image,title,date,description,content,slug, props}:any) {
    return(
        <>
        <section className={styles.principal}>
            <div className={styles.contenido}>
                <div className={"row "+styles.header}>
                    <div className={"col-md-6 "+styles.title}>
                        <ul>
                            <li><span>{title}</span></li>
                        </ul>
                    </div>
                    <div className={"col-md-6 "+styles.date}>
                        <p>{moment(date).format(day) + `${" de "}` + moment(date).format(month) + `${" de "}` + moment(date).format(year)}</p>
                    </div>
                </div>
                <div className={styles.description}>
                    <p>{description}</p>
                </div>
                <div className={styles.the_img}>
                    <img src={image} alt={title} />
                </div>
                <div dangerouslySetInnerHTML={{__html: marked(content)}}/>

                {/* CONTACT INFO */}
                <div className={styles.contact}>
                    <Contact />
                </div>
            </div>
        </section>

        {/* RELATED TOPICS */}
        <section className={styles.related_topic}>
            <div className={styles.related_title}>
                <p>Temas relacionados</p>
            </div>
            <RelatedTopics props={props} />
        </section>
        </>
    )
}
