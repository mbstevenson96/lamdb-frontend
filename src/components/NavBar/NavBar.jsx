import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.container}>
      {user ?
        <ul className={styles.navUl}>
          <li>Welcome, {user.name}</li>
          <li><Link to="/profiles" className={styles.navLink}>Profiles</Link></li>
          <li><Link to="" onClick={handleLogout} className={styles.navLink}>LOG OUT</Link></li>
          <li><Link to="/changePassword" className={styles.navLink}>Change Password</Link></li>
          <li><Link to="/addVet" className={styles.navLink}>Add Vet Visit</Link></li>
          <li><Link to="/addPet" className={styles.navLink}>Add Pet</Link></li>
        </ul>
      :
        <ul className={styles.navUl}>
          <li><Link to="/login" className={styles.navLink}>Log In</Link></li>
          <li><Link to="/signup" className={styles.navLink}>Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
