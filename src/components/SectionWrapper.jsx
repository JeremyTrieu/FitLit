import React from 'react';

export const SectionWrapper = (props) => {
    const {children, header, title} = props;
  return (
    <section className='min-h-screen flex flex-col'>
        <div className='bg-slate-950 py-10 flex flex-col gap-4 justify-center items-center p-4'>
            <p className='uppercase font-medium text-xl'>{header}</p>
            <h2 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg: text-5xl'>{title[0]} <span>{title[1]}</span> {title[2]}</h2>
        </div>
        <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4'>
            {children}
        </div>
    </section>
  )
};
