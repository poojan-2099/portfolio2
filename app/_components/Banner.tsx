'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">Full Stack</span>
                        <br />
                        <span className="ml-0">Developer</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Poojan Patel
                        </span>
                        . A creative Frontend Developer with 3+ years of
                        experience in building high-performance, scalable, and
                        responsive web solutions.
                    </p>
                    <Button
                        as="link"
                        title="Contact Me"
                        href={`mailto:${
                            GENERAL_INFO.email
                        }?subject=${encodeURIComponent(
                            GENERAL_INFO.emailSubject,
                        )}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                        Contact Me
                    </Button>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h2
                            className="text-3xl sm:text-4xl font-anton text-primary mb-1.5"
                            aria-label="3 plus years of experience"
                            tabIndex={0}
                        >
                            3+
                        </h2>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h2
                            className="text-3xl sm:text-4xl font-anton text-primary mb-1.5"
                            tabIndex={0}
                            aria-label="7+ Completed Projects"
                        >
                            7+
                        </h2>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h2
                            className="text-3xl sm:text-4xl font-anton text-primary mb-1.5"
                            tabIndex={0}
                            aria-label="10k+ hours worked"
                        >
                            10K+
                        </h2>
                        <p className="text-muted-foreground">Hours Worked</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
