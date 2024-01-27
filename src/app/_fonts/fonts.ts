import { Lora, Inter, Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const fixel_text_semi_bold = localFont({
  src: [{ path: './local-fonts/FixelText-SemiBold.woff2' }, { path: './local-fonts/FixelText-SemiBold.otf' }],
  variable: '--font-fixel-text-semi-bold',
  display: 'swap',
});

export const fontClasses = [lora.variable, inter.variable, plus_jakarta_sans.variable, fixel_text_semi_bold.variable].join(
  ' ',
);
