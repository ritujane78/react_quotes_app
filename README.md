# React Quotes App

A modern and responsive React application that displays inspirational quotes and allows users to save their favorite quotes for quick access. The application provides a clean and intuitive user interface with a dedicated Favorites section, responsive layouts, and smooth user interactions.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue?logo=css3)

## Features

* Display inspirational and motivational quotes
* Clean and modern user interface
* Add quotes to favorites
* Remove quotes from favorites
* Dedicated favorites page
* Responsive design for mobile, tablet, and desktop devices
* Scrollable favorites section for improved usability
* Component-based React architecture
* Fast development and build process using Vite

---
## API Integration

This application uses the Quotable API to fetch random inspirational quotes along with their authors.

### Endpoint

```javascript
https://api.quotable.io/random
```

### Example Response
```json
{
  "_id": "example-id",
  "content": "The future depends on what you do today.",
  "author": "Mahatma Gandhi"
}
```

## Tech Stack

### Frontend

* React
* JavaScript (ES6+)
* CSS3

### Development Tools

* Vite
* npm

---

## Getting Started

### Prerequisites

Make sure you have installed:

* Node.js (v18 or later recommended)
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/ritujane78/react_quotes_app.git
```

Navigate into the project:

```bash
cd react_quotes_app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## ⚙️ Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

##  Learning Objectives

This project demonstrates:

* React component architecture
* State management using React hooks
* Conditional rendering
* Event handling
* Responsive CSS design
* UI component organization
* Managing user favorites
* Modern frontend development with Vite
