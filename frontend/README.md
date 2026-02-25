# Modern Developer Portfolio

A responsive, professional portfolio website built with React, Vite, and Framer Motion.

## Features

- **Dark & Light Mode**: Automatically detects system preference or user choice.
- **Smooth Animations**: Powered by Framer Motion for engaging transitions.
- **Responsive Layout**: Works seamlessly on mobile, tablet, and desktop.
- **Modern Design**: Clean typography, glassmorphism effects, and developer aesthetics.

## Project Structure

- `src/components/`: Contains all UI sections (Hero, About, Skills, Projects, etc.)
- `src/styles/`: (Styles are currently alongside components or in `index.css`)
- `public/`: Static assets like images and `resume.pdf`.

## Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## Customization

- **Resume**: Place your PDF resume in the `public` folder and name it `resume.pdf`.
- **Images**: Update `src/components/Hero.jsx` with your actual profile image.
- **Projects**: Edit `src/components/Projects.jsx` to reflect your work.
- **Contact Info**: Update `src/components/Contact.jsx` with your email and form handling logic.
- **Colors**: Modify CSS variables in `src/index.css` to change the theme.

## Technologies Used

- React 18+
- Vite
- Framer Motion
- Lucide React (Icons)
- CSS3 (Variables, Flexbox, Grid)
