import styles from "./styles.module.css";
import { Cookies } from "react-cookie";
import Link from "next/link";

export default function Content({
  title,
  description,
  index,
  urlRedirection
}: any) {

  const cookies = new Cookies();
  const setCategoryCookie = () => {
    cookies.set("title", title.split(" ").join("").toLowerCase(), { path: "/" });
  };

  const link_wsp = "https://wa.link/5yfdcc";

  return (
    <>
      <div className={styles.content} key={index}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={urlRedirection} title="ver producto">
          {'Ver producto'}
        </a>
      </div>
    </>
  );
}
