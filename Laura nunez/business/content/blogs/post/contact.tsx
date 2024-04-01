import styles from "./styles.module.css";
import React from "react";

export default function Contact() {
    return(
        <section className={styles.content_contact}>
            <div className={"row "+styles.moving}>
                <div className={"col-md-3"}>
                    <div className={styles.laura}>
                        <img src="/images/content/blogs/details/laura.png" alt="foto-Laura-Nuñez" />
                    </div>
                </div>
                <div className={"col-md-4"}>
                    <div className={styles.info}>
                        <p>Por:</p>
                        <p>Laura Nuñez</p>
                        <p>Profesional makeup artist</p>
                        <div className={styles.networks}>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/lauranunezmakeup" target="__blank"><img src="/images/content/blogs/details/facebook.png" alt="facebook-Laura-Nuñez" /></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/lauranunezmakeup/?next=%2F" target="__blank"><img src="/images/content/blogs/details/instagram.png" alt="Instagram-Laura-Nuñez" /></a>
                                </li>
                                <li>
                                    <a href="#" target="__blank"><img src="/images/content/blogs/details/linkedin.png" alt="linkedin-Laura-Nuñez" /></a>
                                </li>
                                <li>
                                    <a href="#" target="__blank"><img src="/images/content/blogs/details/twitter.png" alt="twitter-Laura-Nuñez" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.send_mail}>
                    <div>
                        <form className={"form-inline "+styles.form}>
                            <div className="form-group mb-2">
                                <input type="email" placeholder="E-mail" required/>
                                <button>Suscríbete</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}
