'use client';

import Badge from '@/components/badge';
import CopyEmail from '@/components/copy-email';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { EMAIL, GITHUB_LINK, TWITTER_LINK } from '@/lib/constants';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

export const initial = { opacity: 0, y: 20 };
export const animate = { opacity: 1, y: 0 };
export const duration = 0.7;
export const delay = 0.1;

export const expectations = [
  'Building functional websites with React, TypeScript and Tailwind CSS',
  'Creating aesthetic and user-friendly UIs with Figma',
  'Developing full-stack web applications with Next.js',
];

export const expectationsMore = [
  'Crafting nice and smooth web animations with Framer Motion',
  'Multilingual communication skills (English, Japanese, Chinese)',
  "Background in Computer Science with a Bachelor's degree",
  'Writing well-organized and clean code',
];

const techStacks = [
  'React / Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'JavaScript',
  'HTML',
  'CSS',
  'Node.js / Express',
  'PostgreSQL',
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
        className="mx-auto mt-8 flex w-full max-w-screen-md items-center gap-2 px-4 py-5 sm:px-16 lg:px-24"
      >
        <div>
          <Avatar className="h-14 w-14">
            <AvatarImage src="/images/avatar.jpg" />
            <AvatarFallback>Mia</AvatarFallback>
          </Avatar>
        </div>
        <div className="font-medium">
          <h3>Mia</h3>
          <p className="tracking-tight text-muted">Frontend Developer</p>
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        initial={initial}
        animate={animate}
        transition={{ duration: duration, delay: delay * 1 }}
        className="mx-auto w-full max-w-screen-md px-4 py-5 sm:px-16 lg:px-24"
      >
        <h3 className="mb-1 text-lg font-semibold lowercase">
          hey, I&apos;m Mia
        </h3>
        <div className="text-muted">
          <p>
            I build websites with{' '}
            <span className="text-foreground">
              <Badge href="https://react.dev">
                {/* <FaReact className="mr-1 inline-flex size-3 text-[#6ADCFB]" /> */}
                React
              </Badge>
            </span>{' '}
            /{' '}
            <span className="text-foreground">
              <Badge href="https://nextjs.org/">
                {/* <SiNextdotjs className="mr-1 inline-flex size-3 text-[#000]" /> */}
                Next.js
              </Badge>
            </span>
            . I define myself as a{' '}
            <span className="text-foreground">Design Engineer</span> than a
            Frontend Developer, as I also excel in designing beautiful UIs.
          </p>
        </div>
      </motion.section>

      {/* Expectations */}
      <motion.section
        initial={initial}
        animate={animate}
        transition={{ duration: duration, delay: delay * 2 }}
        className="mx-auto w-full max-w-screen-md px-4 py-5 sm:px-16 lg:px-24"
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
          className="inline-flex items-center text-muted underline hover:text-foreground"
        >
          {isOpen ? 'hide' : 'and'} more...
        </Button>
      </motion.section>

      {/* Tech Stacks */}
      <motion.section
        initial={initial}
        animate={animate}
        transition={{ duration: duration, delay: delay * 3 }}
        className="mx-auto w-full max-w-screen-md px-4 py-5 sm:px-16 lg:px-24"
      >
        <h3 className="mb-1 text-lg font-semibold lowercase">tech stacks</h3>
        <ul className="flex flex-wrap gap-1.5">
          {techStacks.map((stack, index) => (
            <li
              key={index}
              className="rounded border border-border bg-neutral-50 p-1 text-sm text-muted hover:text-foreground dark:bg-neutral-800"
            >
              {stack}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Connect */}
      <motion.section
        initial={initial}
        animate={animate}
        transition={{ duration: duration, delay: delay * 4 }}
        className="mx-auto mb-8 w-full max-w-screen-md px-4 py-5 sm:px-16 lg:px-24"
      >
        <h3 className="mb-1 text-lg font-semibold lowercase">connect</h3>
        <div className="text-foreground">
          <p>
            View my code and open-source projects on{' '}
            <span>
              <Badge href={GITHUB_LINK}>
                {/* <FaGithub className="mr-1 inline-flex size-3" /> */}
                GitHub
              </Badge>
            </span>
            , follow me on{' '}
            <span>
              <Badge href={TWITTER_LINK}>
                {/* <FaXTwitter className="mr-1 inline-flex size-3" /> */}
                Twitter / X
              </Badge>
            </span>
            , or email me at{' '}
            <span>
              <CopyEmail email={EMAIL} />
            </span>
            .
          </p>
        </div>
      </motion.section>
    </>
  );
}
