import localFont from "next/font/local";

export const brandTypeface = localFont({
  src: [
    {
      path: "./fonts/PlaywriteGBS-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "./fonts/PlaywriteGBS-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--typeface-brand",
});
