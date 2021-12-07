import Layout from "../../../components/Layout"
import ResourceForm from "../../../components/ResourceForm"
import axios from "axios"
import { useRouter } from "next/router"

function ResourceEdit({resource}) {
  const router = useRouter()
    const updateResource = (formData) => {
        axios.patch("/api/resources", formData)
          .then(_ => router.push(`/resources/${resource.id}`))
          .catch(err => alert(err?.response?.data));
      }
    
    return (
        <Layout>
        <div className="container">
            <div className="columns">
                <div className="column is-8 is-offset-2 mt-4">
                    <h1>{resource.title}</h1>
                    <ResourceForm
                    initialData ={resource}
                    onFormSubmit={updateResource}/>
                </div>
            </div>
        </div>
    </Layout>
    )
}
// export async function getStaticPaths(){
//     const resData = await fetch("http://localhost:3001/api/resources")
//     const data = await resData.json()
//     const paths = data.map(resource =>{
//         return{
//             params : {id: resource.id}
//         }
//     })
//     return {
//         paths,
//         // Fallback: False. Neu duong dan bi sai thi tra lai trang 404
//         // Fallback: True. Neu duong dan bi sai, thi sever get Data lai roi kiem tra, neu ko co thi 404
//         fallback: false
//     }
// }
// export async function getStaticProps({params}){
//     const dataRes = await fetch(`http://localhost:3001/api/resources/${params.id}`)
//     const data = await dataRes.json()
//     return{
//         props:{
//             resource : data
//         },
//         revalidate : 1
//     }
// }
export async function getServerSideProps({params}) {
    const dataRes = await fetch(`http://localhost:3001/api/resources/${params.id}`);
    const data = await dataRes.json();
  
    return {
      props: {
        resource: data
      }
    }
  }
  
export default ResourceEdit

