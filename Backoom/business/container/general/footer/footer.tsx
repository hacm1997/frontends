import Link from "next/link";
import styles from "./styles.module.css";
import common from "../../../../services/common.json";

export default function Footer() {
  const footer: any = common.footer;
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.general}>
          <div className={styles.content_1}>
            <Link href={common.navbar.home.url}>
              <div className={styles.logo}>
                <img
                  src={common.navbar.logo.srcImg}
                  alt={common.navbar.logo.alt}
                  title={common.navbar.logo.alt}
                />
              </div>
            </Link>
            <h2>{footer.aboutUs.aboutUsTitle}</h2>
            <p>{footer.aboutUs.aboutUsContent}</p>
          </div>

          <div className={styles.content_2}>
            <h2>{footer.contact.contactTitle}</h2>
            <div className={styles.infoUbi}>
              <div className={styles.itenUbi}>
                <i className="bx bx-map" title={footer.address.iconTitle}></i>
                <div className={styles.info}>
                  <p>{footer.address.street}</p>
                  <p>{footer.address.city}</p>
                </div>
              </div>

              <div className={styles.itenUbi}>
                <i className="bx bx-phone" title={footer.contact.iconTitle}></i>
                <div className={styles.info}>
                  <p>{footer.contact.contactNumber}</p>
                </div>
              </div>

              <div className={styles.itenUbi}>
                <i
                  className="bx bx-time-five"
                  title={footer.schedule.iconTitle}
                ></i>
                <div className={styles.info}>
                  <p>{footer.schedule.scheduleTitle}</p>
                  <p>{footer.schedule.hours}</p>
                  <p>{footer.schedule.weekendHours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content_3}>
            <h2>{footer.socialMedia.socialMediaTitle}</h2>
            <div className={styles.social}>
              <a href={footer.socialMedia.urls.instagram.url} target="_blank" title={footer.socialMedia.urls.instagram.title}>
                {" "}
                <i
                  className="bx bxl-instagram"
                  title={footer.socialMedia.urls.instagram.title}
                ></i>
              </a>
              <a href={footer.socialMedia.urls.facebook.url} target="_blank" title={footer.socialMedia.urls.facebook.title}>
                <i
                  className="bx bxl-facebook"
                  title={footer.socialMedia.urls.facebook.title}
                ></i>
              </a>
              <a href={footer.socialMedia.urls.linkedin.url} target="_blank" title={footer.socialMedia.urls.linkedin.title}>
                {" "}
                <i
                  className="bx bxl-linkedin"
                  title={footer.socialMedia.urls.linkedin.title}
                ></i>
              </a>
            </div>
            <div className={styles.policy}>
              <a href="/Terminos y condiciones - Backoom.pdf" target="_blank" title="Términos y condiciones">
                Términos y condiciones - Backoom
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
