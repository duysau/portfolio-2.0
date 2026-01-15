'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I believe in a user centered design approach, ensuring that
                    every project I work on is tailored to meet the specific
                    needs of its users. My focus on clean code and performance
                    optimization helps deliver exceptional experiences that
                    users love.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Duy.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                I&apos;m a Front-end Developer with 5 years of
                                experience building scalable and
                                high-performance web applications using ReactJS
                                and NextJS. With strong expertise in TypeScript
                                and modern UI libraries, I specialize in
                                front-end architecture and performance
                                optimization. I actively contribute to technical
                                direction and code quality, ensuring
                                maintainable and exceptional UI/UX experiences
                                for international projects.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                I possess a deep understanding of the modern web
                                ecosystem, including State Management (Redux,
                                Context, TanStack Query) and UI styling
                                (Tailwind CSS, Shadcn UI, Ant Design). I apply
                                industry best practices and design patterns,
                                such as Singleton-based API services, to build
                                robust systems. Furthermore, I have practical
                                experience with Web3.js blockchain integration
                                and AI-driven applications, demonstrating my
                                capability to master cutting-edge technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
