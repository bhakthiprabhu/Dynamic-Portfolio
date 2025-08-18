# My Portfolio Website

A modern, responsive, and dynamic personal portfolio website built with **React** to showcase skills, projects, and contact information. The website supports interactive skill cards and a fully functional contact form with **EmailJS integration**.

---

![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)  
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)  
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

---

## Features

- Fully responsive design for desktop and mobile devices  
- Dynamic skills section with interactive icons  
- Contact form integrated with EmailJS  
- Smooth fade-in animations for sections  
- Social links with hover effects and interactive icons  
- Projects section with screenshots and descriptions  
- Resume download option  

---

## Technologies Used

- **React** – Frontend library  
- **EmailJS** – Sending emails via contact form  
- **React Icons** – Icon library for skills and social links  
- **CSS Variables** – Theming and global styles  
- **Flexbox & CSS Grid** – Layout and responsiveness  
- **Vite** – Development server and build tool  

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bhakthiprabhu/Dynamic-Portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Dynamic-Portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

1. Start the development server:
   ```bash
    npm run dev
   ```

2. Open [http://localhost:5173/](http://localhost:5173/) in your browser.

3. Configure the contact form with EmailJS:
   - Add your **Service ID**, **Template ID**, and **User ID** in `src/data/config.js`.
   - Email messages will be sent to your configured email account.

---

## Customization

- **Theme Colors:** Modify CSS variables in `src/styles/main.css`.
- **Skills Section:** Add skills in `src/data/config.js` with icons from `react-icons/si`.
- **Social Links:** Update the `contact.socials` object in `src/data/config.js`.
- **Resume:** Replace `public/assets/files/resume.pdf` with your resume.
- **Project Images:** Replace `public/assets/images/project1.png`, etc., with your project screenshots.

---

## Folder Explanation

- **public/** – Static assets such as images and resume
- **src/components/** – Individual React components for each section
- **src/data/config.js** – Centralized data for skills, social links, and EmailJS config
- **src/styles/** – Component-specific and global CSS files
- **App.jsx** – Main React application layout
- **main.jsx** – Entry point for rendering the React app

---

## License

This project is licensed under the MIT License.

---
