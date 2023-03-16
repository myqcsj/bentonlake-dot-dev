import { Major_Mono_Display, Epilogue, Source_Code_Pro } from 'next/font/google';

export const major_mono_display = Major_Mono_Display({
  subsets: ['latin'],
  weight: "400"
});

export const epilogue = Epilogue({
  subsets: ['latin'], 
  display: 'swap',
});

export const source_code_pro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap'
});