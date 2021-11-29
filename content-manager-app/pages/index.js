import Navbar from '../components/Navbar'
import ResourceHighlight from '../components/ResourceHighlight'
import Newsletter from '../components/Newsletter'
import ResourceList from '../components/ResourceList'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home({resources}) {
  return (
    <div className={styles.container}>
      <Navbar />
      <ResourceHighlight resources={resources}/>
      <Newsletter />
      <ResourceList resources={resources}/>
      <Footer />
    </div>
  )
}
export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3000/api/resources");
  const data = await resData.json();
  
  return {
    props: {
      resources: data
    }
  }
}