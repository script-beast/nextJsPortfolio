import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ankit Prajapati | Full Stack Developer',
  description: 'Full Stack Developer specializing in MERN stack, TypeScript, and AI-powered applications. Computer Science graduate with experience in scalable web development.',
  keywords: 'Full Stack Developer, MERN Stack, TypeScript, React, Node.js, AI, Web Development',
  authors: [{ name: 'Ankit Prajapati' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}