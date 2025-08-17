# My Portfolio Website

A modern, responsive, and dynamic personal portfolio website built with **React** to showcase skills, projects, and contact information. The website supports interactive skill cards, and a fully functional contact form with **EmailJS integration**.

---

![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)  
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)  
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)


---

## Features

- Fully responsive design for desktop and mobile devices  
- Dynamic skills section with icons  
- Contact form integrated with EmailJS  
- Animated sections with fade-in effects  
- Social links with interactive icons  

---

## Technologies Used

- **React** – Frontend library  
- **EmailJS** – Sending emails via contact form  
- **React Icons** – Icon library for skills and socials  
- **CSS Variables** – Theming and global styles  
- **Flexbox & CSS Grid** – Layout and responsiveness  

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
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Configure the contact form with EmailJS:
   - Add your **Service ID**, **Template ID**, and **User ID** in `src/data/config.js`.
   - Email messages will be sent to your configured email account.

---

## Customization

- **Theme Colors:** Edit CSS variables in `src/styles/main.css` to change colors.  
- **Skills Section:** Add more skills in `src/data/config.js` with corresponding icons from `react-icons/si`.  
- **Social Links:** Update the `contact.socials` object in `src/data/config.js` with your profiles.  

---

## License

This project is licensed under the [MIT License](LICENSE).  

--- 
