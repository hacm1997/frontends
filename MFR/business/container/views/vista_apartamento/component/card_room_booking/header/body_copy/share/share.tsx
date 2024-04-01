import { useState } from "react";
import styles from "./styles.module.css";
import * as React from "react";

import {
    FacebookShareCount,
    HatenaShareCount,
    OKShareCount,
    PinterestShareCount,
    RedditShareCount,
    TumblrShareCount,
    VKShareCount,
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TelegramShareButton,
    TelegramIcon,
    EmailShareButton,
    EmailIcon
  } from "react-share";
import { useRouter } from "next/router";

export default function Share(props: any) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const shareUrl = `${process.env.NEXT_PUBLIC_API_URL}${router.asPath}`;

  return (
    <>
      <button className={styles.button} onClick={() => setOpen(true)}>
        <span>
          <i className="bx bxs-share"></i>
          {props.text}
        </span>
      </button>
      {open && (
        <div className={styles.modal}>
          <div className={styles.modalShare}>
            <div>
            <h3>Compartir</h3>
            </div>
        <FacebookShareButton className="" url={shareUrl}>
            <FacebookIcon size={60}  round={true}/>
        </FacebookShareButton>
        <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon size={60}  round={true}/>
        </WhatsappShareButton>
        <TelegramShareButton url={shareUrl}>
            <TelegramIcon size={60}  round={true}/>
        </TelegramShareButton>
        
        
          </div>
          <div>
            <button className={styles.buttonx} onClick={() => setOpen(false)}><i className='bx bxs-message-alt-x  bx-md' ></i></button>
          </div>
        </div>
      )}
    </>
  );
}
