/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Template custom colors
        'custom-success': '#59ab6e',
        'custom-success-hover': '#69bb7e',
        'custom-warning': '#ede861',
        'custom-muted': '#bcbcbc',
        'custom-light': '#cfd6e1',
        'custom-dark': '#212934',
        'custom-light-bg': '#e9eef5',
        'custom-black': '#1d242d',
        'carousel-bg': '#efefef',
        'border-light-custom': '#2d343f',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'template-body': '18px',
        'template-h1': '48px',
        'template-h2': '30px',
        'template-h3': '22px',
      },
      fontWeight: {
        'template-light': '300',
        'template-normal': '400',
        'template-medium': '500',
        'template-thin': '200',
      },
      minHeight: {
        'carousel-lg': '30rem',
      },
      spacing: {
        'nav-top': '40px',
      }
    },
  },
};

export default tailwindConfig;