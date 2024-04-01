import { useRouter } from 'next/router';
import styles from './styles.module.css'
import { useState } from "react";

const menuItems = [
  { id: "tradicionales", label: "Tradicionales" },
  { id: "especiales", label: "Especiales" },
  { id: "bebidas", label: "Bebidas" }
]

export default function Tab(props: any) {
  const route = useRouter();
  const [active, setActive] = useState("tradicionales")

  function handTabData(data: any) {
    props.handleTabData(data.target.id)
  }

  const handleActive = (e: any) => {
    setActive(e.target.id);
  };

  const { item } = styles;

  return (
    <>
      <nav className={styles.tab}>
        <div className={styles.general}>
          {menuItems.map(({ id, label }) => (
            <div className={route.asPath.includes("/tachido") ? item : styles.item2} key={id} onClick={handleActive}>
              <span onClick={handTabData} id={id} className={active === id ? styles.active : ""}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}