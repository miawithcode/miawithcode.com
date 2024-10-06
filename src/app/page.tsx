'use client';

import Badge from '@/components/badge';
import CopyEmail from '@/components/copy-email';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { EMAIL, GITHUB_LINK, TWITTER_LINK } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

const initial = { opacity: 0, y: 20 };
const animate = { opacity: 1, y: 0 };
const duration = 0.7;
const delay = 0.1;

const expectations = [
  'Building functional websites with React, TypeScript and Tailwind CSS',
  'Creating aesthetic and user-friendly UIs with Figma',
  'Developing full-stack web applications with Next.js',
];

const expectationsMore = [
  'Crafting nice and smooth web animations with Framer Motion',
  'Multilingual communication skills (English, Japanese, Chinese)',
  "Background in Computer Science with a Bachelor's degree",
  'Writing well-organized and clean code',
];

const techStacks = [
  {
    category: 'languages',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'frameworks',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
  },
  { category: 'animation', items: ['Framer Motion', 'GSAP'] },
  { category: 'design', items: ['Figma'] },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Profile */}
      <motion.section
        initial={initial}
        animate={animate}
        transition={{ duration: duration, delay: delay * 0 }}
        className="mt-8 flex items-center gap-2 py-5"
      >
        <div>
          <Avatar className="h-14 w-14">
            <AvatarImage src="/images/avatar.jpg" />
            <AvatarFallback>Mia</AvatarFallback>
          </Avatar>
        </div>
        <div className="font-medium">
          <h3>Mia</h3>
          <p className="text-muted">Frontend Developer (Design Engineer)</p>
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        initial={initial}
        animate={animate}
        transition={{ duration: duration, delay: delay * 1 }}
        className="py-5"
      >
        <h3 className="mb-1 text-lg font-semibold lowercase">
          hey, I&apos;m Mia
        </h3>
        <div className="text-muted">
          <p>
            I&apos;m a{' '}
            <span className="text-foreground">frontend developer</span> who
            knows how to design, experienced in building websites using{' '}
            <span className="text-foreground">
              <Badge href="https://react.dev">
                {/* <FaReact className="mr-1 inline-flex size-3 text-[#6ADCFB]" /> */}
                <Image
                  src="/icons/react.svg"
                  alt="React Logo"
                  width={12}
                  height={12}
                  className="mr-1"
                />
                React
              </Badge>
            </span>{' '}
            /{' '}
            <span className="text-foreground">
              <Badge href="https://nextjs.org/">
                <Image
                  src="/icons/nextjs.svg"
                  alt="Next.js Logo"
                  width={12}
                  height={12}
                  className="mr-1"
                />
                Next.js
              </Badge>
            </span>
            .
          </p>
        </div>
      </motion.section>

      {/* Expectations */}
      <motion.section
        initial={initial}
        animate={animate}
        transition={{ duration: duration, delay: delay * 2 }}
        className="py-5"
      >
        <h3 className="mb-1 text-lg font-semibold lowercase">
          what you can expect from me
        </h3>
        <ul className="ml-4 text-muted">
          {expectations.map((item, index) => (
            <li className="list-disc" key={index}>
              {item}
            </li>
          ))}
        </ul>
        {isOpen && (
          <ul className="ml-4 text-muted">
            {expectationsMore.map((item, index) => (
              <li className="list-disc" key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
        <Button
          variant={'link'}
          onClick={handleClick}
          className="inline-flex items-center text-base font-normal text-muted underline hover:text-foreground"
        >
          {isOpen ? 'hide' : 'and'} more...
        </Button>
      </motion.section>

      {/* Tech Stacks */}
      <motion.section
        initial={initial}
        animate={animate}
        transition={{ duration: duration, delay: delay * 3 }}
        className="py-5"
      >
        <h3 className="mb-1 text-lg font-semibold lowercase">tech stacks</h3>
        <div className="flex flex-col gap-2">
          {/* {techStacks.map((stack, index) => (
            <li
              key={index}
              className="rounded border border-border bg-neutral-50 p-1 text-sm text-muted hover:text-foreground dark:bg-neutral-800"
            >
              {stack}
            </li>
          ))} */}
          {techStacks.map((stack, index) => (
            <div key={index} className="flex items-baseline gap-1">
              <h3 className="text-muted">{stack.category}:</h3>
              <ul>
                <li className="flex flex-wrap gap-1.5">
                  {stack.items.map((item, index) => (
                    <span
                      className="rounded border border-border bg-neutral-50 px-1.5 py-1 text-sm leading-none text-muted hover:border-foreground hover:text-foreground dark:bg-neutral-800"
                      key={index}
                    >
                      {item}
                    </span>
                  ))}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Connect */}
      <motion.section
        initial={initial}
        animate={animate}
        transition={{ duration: duration, delay: delay * 4 }}
        className="mb-8 py-5"
      >
        <h3 className="mb-1 text-lg font-semibold lowercase">connect</h3>
        <div className="text-muted">
          <p>
            View my code and open-source projects on{' '}
            <span className="text-foreground">
              <Badge href={GITHUB_LINK}>
                <Image
                  src="/icons/github.svg"
                  alt="GitHub Logo"
                  width={12}
                  height={12}
                  className="mr-1"
                />
                GitHub
              </Badge>
            </span>
            , follow me on{' '}
            <span className="text-foreground">
              <Badge href={TWITTER_LINK}>
                <Image
                  src="/icons/twitter.svg"
                  alt="Twitter Logo"
                  width={12}
                  height={12}
                  className="mr-1"
                />
                Twitter / X
              </Badge>
            </span>
            , or email me at{' '}
            <span className="text-foreground">
              <CopyEmail email={EMAIL} />
            </span>
            .
          </p>
        </div>
      </motion.section>
    </>
  );
}
