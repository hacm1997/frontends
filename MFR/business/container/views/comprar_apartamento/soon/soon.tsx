import React from 'react'
import styles from  "./styles.module.css";
import useTranslation from 'next-translate/useTranslation';

const Soon = () => {
  const {t, lang} = useTranslation('buy');
  return (
    <div className={styles.title2}>
      <h2>
        {t('title.soon')}
        </h2>
      <p>
        {t('title.text')}
      </p>
    </div>
  )
}

export default Soon