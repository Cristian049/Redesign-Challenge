# Redesign Challenge

A responsive React web app that fetches and displays skip bin locations by area/postcode. Features dark/light mode toggle, error handling, and a clean UI layout.

---

## Live Demo

You can check out the live demo of this project hosted on Vercel:  
[https://redesign-challenge.vercel.app/](https://redesign-challenge.vercel.app/)

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [How It Works](#how-it-works)  
- [Usage](#usage)  
- [Future Improvements](#future-improvements)  
- [License](#license)  

---

## About

This project fetches skip bin data from an external API and displays it in a user-friendly interface with options to toggle between dark and light themes. It demonstrates React hooks, conditional rendering, responsive design, and theming with CSS variables.

---

## Features

- Fetches skip bin data from the [We Want Waste API](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft)
- Responsive grid layout adapts to screen size
- Dark and light mode toggle with CSS custom properties
- Loading spinner while fetching data
- Error handling and display when API calls fail
- Click to select and highlight individual skip entries

---

## Tech Stack

- React (with hooks)  
- CSS with custom properties for theming  
- Fetch API for data requests

---

## Project Structure

- `src/`
  - `assets/` – images, icons, and other static assets
  - `components/`
    - `BottomBar/`
    - `Content/`
    - `ErrorMessage/`
    - `Header/`
    - `HeaderButton/`
    - `Loader/`
    - `NavLinkItem/`
    - `Sidebar/`
    - `Skip/`
    - `UserInfo/`
    - `Layout.jsx` – main layout component for the app structure
    - `MainCont.jsx` – main content component
    - `SkipsList.jsx` – component that renders the list of skips
  - `hooks/` – custom React hooks (e.g., `useDarkMode`)
  - `styles/`
    - `index.css` – global styles and CSS reset
    - `themes.css` – CSS variables and styles for dark/light mode
  - `utils/` – utility functions
  - `App.jsx` – root React component
  - `main.jsx` – app entry point

---

## How It Works

1. **Data fetching with `useEffect`:**  
   When the `App` component mounts, it triggers a side effect via `useEffect` to fetch skip bin data from the external API. This effect runs only once because the dependency array is empty (`[]`).  
   Inside, an asynchronous function `fetchSkipsData`:
   - Sets loading state (`isLoading`) to `true`  
   - Clears any previous error messages  
   - Calls the API to get skip data based on postcode and area  
   - On success, stores the fetched data in state (`skips`)  
   - On failure, sets an error message to display to the user  
   - Finally, toggles off the loading state  

2. **State management:**  
   The component uses multiple `useState` hooks to track:  
   - `skips`: array of skip bins data from API  
   - `isLoading`: boolean to show loader while data is being fetched  
   - `errorMessage`: string to show errors if fetching fails  
   - `selectedId`: id of the currently selected skip (or `null` if none)  

3. **Dark mode toggle with custom hook (`useDarkMode`):**  
   The `useDarkMode` hook manages a boolean `isDark` and its setter `setIsDark`. This hook  uses localStorage to persist the user’s theme preference across sessions.  
   Another `useEffect` listens for changes in `isDark` and updates the root `<html>` element’s CSS classes to either `.dark-mode` or `.light-mode`, which switches theme variables in CSS.  

4. **UI Rendering:**  
   - When loading, a spinner is shown via the `Loader` component  
   - If data is loaded and no error, the `SkipsList` component renders a grid of skip bins  
   - If there’s an error, the `ErrorMessage` component shows the error to the user  
   - The `Layout` component wraps the UI, passing down handlers and state for dark mode toggling and skip selection  

5. **User interactions:**  
   Clicking on a skip item toggles its selection state (`selectedId`), allowing the UI to highlight and show more info about the selected skip.

---
---

# Usage



## Clone the repo:

```bash
git clone https://github.com/Cristian049/Redesign-Challenge.git
cd Redesign-Challenge
```

## Install dependencies:

```bash
npm install
```

## Run the app:

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Future Improvements

- Add pagination or infinite scrolling for large datasets
- Add search/filter by location or other skip properties
- Improve accessibility features (keyboard navigation, ARIA)
- Add unit and integration tests
- Add user authentication for personalized data

## License

MIT © Cristian049
