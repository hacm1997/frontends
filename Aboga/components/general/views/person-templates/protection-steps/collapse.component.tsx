import React, { useState } from 'react';
import styles from './styles.module.css';

export const Collapse = ({ title, id, children, onToggle, openCollapseId }: any) => {
  const isCollapsed = openCollapseId !== id;

  const handleToggle = () => {
    if (onToggle) {
      onToggle(id);
    }
  };

  return (
    <div className="mb-2 px-5 md:w-full lg:px-0 lg:w-[900px]">
      <div
        className={isCollapsed ? 'flex items-center justify-between border-2 border-blue-700 rounded h-14 px-5 cursor-pointer hover:bg-blue-700 hover:text-white hover:duration-300 duration-300' : `flex items-center justify-between border-2 border-blue-700 bg-blue-700 text-white rounded h-14 px-5 cursor-pointer`}
        onClick={handleToggle}
      >
        <h3 className="font-bold">
          {`${id}. ${title}`}
        </h3>
        {isCollapsed ? "+" : "-"}
      </div>
      <div
        className={isCollapsed ? styles.collapsed : styles.expanded}
        aria-expanded={!isCollapsed}
      >
        {children}
      </div>
    </div>
  );
};