import Navbar from '../components/Navbar'
import ResourceHighlight from '../components/ResourceHighlight'
import Newsletter from '../components/Newsletter'
import ResourceList from '../components/ResourceList'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <ResourceHighlight />
      <Newsletter />
      <ResourceList />
      <Footer />
    </div>
  )
}
