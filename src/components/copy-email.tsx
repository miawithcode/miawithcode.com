'use client';

import { EnvelopeOpenIcon } from '@radix-ui/react-icons';
import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';

type CopyEmailProps = {
  email: string;
};

export default function CopyEmail({ email }: CopyEmailProps) {
  const [message, setMessage] = useState('copy email');
  const buttonRef = useRef<HTMLButtonElement>(null);

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(email);
        setMessage('copied!');
      } catch (error) {
        setMessage('failed to copy');
      }
    } else {
      setMessage('clipboard access not available');
    }
  };

  useEffect(() => {
    const handleMouseLeave = () => {
      setMessage('copy email');
    };

    const buttonElement = buttonRef.current;

    buttonElement?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      buttonElement?.removeEventListener('mouseleave', handleMouseLeave);
    };
  });

  return (
    <span className="group relative">
      <Button
        ref={buttonRef}
        onClick={saveToClipboard}
        variant={'outline'}
        size={'sm'}
        // className="text-text inline-flex items-center whitespace-nowrap rounded border border-border bg-neutral-50 p-1 text-[15px] leading-4 no-underline dark:bg-neutral-800"
        className="p-1 text-[15px] font-normal leading-4"
      >
        <EnvelopeOpenIcon className="mr-1 inline-flex size-[14px]" />
        {email}
      </Button>

      {/* Tooltip */}
      <span className="text-text invisible absolute left-1/2 top-[140%] block -translate-x-1/2 rounded border border-border bg-neutral-100 p-1 text-sm opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-neutral-900">
        {message}
      </span>
    </span>
  );
}
