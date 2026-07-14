import { NavLink, Outlet } from 'react-router-dom'
import styles from './App.module.css'

function App() {
  return (
    <>
      <nav className={styles.nav}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : undefined)}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : undefined)}>
          About
        </NavLink>
        <NavLink
          to="/carousel-examples"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Carousel Examples
        </NavLink>
        <NavLink
          to="/form-elements"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Form Elements
        </NavLink>
        <NavLink
          to="/ui-components"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          UI Components
        </NavLink>
        <a href={`${import.meta.env.BASE_URL}storybook/`} target="_blank" rel="noreferrer">
          Storybook
        </a>
      </nav>
      <Outlet />
    </>
  )
}

export default App
