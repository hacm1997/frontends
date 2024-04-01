import React from 'react'

interface Props {
  array: AccordionProps[];
  title: string;
  className?: string;
}

interface AccordionProps {
  id: number | string;
  label: string;
  icon: React.ReactElement;
}

export const Accordion = ({ array, title, className }: Props) => {
  return (
    <div className={`mx-auto px-5 bg-transparent text-white ${className || ''}`}>
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        <div className="py-5">
          <details className="group transition-transform duration-1000">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>{title}</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="mt-3 group-open:animate-fadeIn space-y-4 text-sm">
              {array.map(({ id, label, icon }) => (
                <div key={id} className="flex items-center text-start">
                  {icon}
                  <span className="ml-2">{label}</span>
                </div>
              ))}
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}
