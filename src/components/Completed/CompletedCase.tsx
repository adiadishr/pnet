import { completedCases } from '@/data';
import React from 'react';

interface CaseProps {
    title: string;
    alt: string;
    url: string;
    list: string[];
    delay: number;
}

const CompletedCase = () => {
    return (
        <div className="w-full px-[5%] flex flex-col pb-24 gap-24">
            <div id="CaseStudies" className='relative opacity-0 -top-8' >'</div>
            {completedCases.map((caseItem, index) => {
                const rightOrientation = index % 2 === 1;
                return (
                    <div key={index} className="flex flex-col w-full gap-12 md:flex-row">
                        <img
                            data-aos='fade-up'
                            data-aos-duration='700'
                            src={caseItem.url}
                            alt={caseItem.alt}
                            className={`object-cover w-full rounded-xl ${rightOrientation ? 'md:order-2 order-1' : ''}`}
                        />
                        <div
                            data-aos='fade-up'
                            data-aos-duration='700'
                            data-aos-delay={caseItem.delay}
                            className={`flex flex-col w-full gap-12 ${rightOrientation ? 'md:order-1 order-2' : ''}`}
                        >
                            <h5>{caseItem.title}</h5>
                            <p className='text-lg font-manrope'>
                                Explore a selection of our key projects, each showcasing our engineering expertise and innovative solutions.
                                Join us as we take you through them one by one.
                            </p>
                            <ul>
                                {caseItem.list.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default CompletedCase