import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Collapse } from './collapse.component';
import styles from './styles.module.css';

const ProtectionStepsComponent = () => {
  const { t } = useTranslation('protection-steps');
  const steps_items = t<any>('steps', {}, { returnObjects: true });
  const [openCollapseId, setOpenCollapseId] = useState(null);

  const handleCollapseToggle = (id: any) => {
    setOpenCollapseId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="flex justify-center py-14">
        <div>
          <div className="flex justify-center pb-10">
            <h3 className="font-black text-4xl font-gotamedium text-[#173A83] text-center mb-5">{t('title')}</h3>
          </div>
          {Array.isArray(steps_items) ? steps_items.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              id={item.id}
              onToggle={handleCollapseToggle}
              openCollapseId={openCollapseId}
            >
              <p className="py-5 px-10 text-justify bg-gray-300" dangerouslySetInnerHTML={{
                __html: item.content.toString().replace(/\|/g, '<br/><br/>'),
              }} />
            </Collapse>
          )) : null}
          <a className="hidden md:flex justify-center pt-4 " href='#Form' title='Ir a formulario'>
            <button className={'w-full '+styles.general_button}>Llena nuestro formulario y nos contactaremos contigo</button>
          </a>
          <a className="md:hidden px-5 sm:flex justify-center pt-4" href='#Form' title='Ir a formulario'>
            <button className={styles.general_button}>Llena nuestro formulario</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProtectionStepsComponent;