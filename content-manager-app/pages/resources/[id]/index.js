import Layout from "../../../components/Layout"
import Link from "next/link"
import axios from "axios"
function ResourceDetail({resource}) {
    const activeResource = () =>{
        axios.patch("/api/resources",{...resource,status:"active"})
         .then(_=> alert("Resource has been activated!"))
         .catch(_ => alert("Cannot active the resource!"))
    }
    return (
        <Layout>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        <section className="section">
                            <div className="columns">
                                <div className="column is-8 is-offset-2">
                                    <div className="content is-medium">
                                        <h2 className="subtitle is-4">{resource.createdAt.substring(0, 10)}</h2>
                                        <h1 className="title">{resource.title}</h1>
                                        <p>{resource.description}</p>
                                        <p>Time to Finish: {resource.timeToFinish} min</p>
                                        <Link href={`/resources/${resource.id}/edit`}>
                                        <a className="button">
                                            Update
                                        </a>
                                        </Link>
                                        <button 
                                        onClick={activeResource}
                                        className="button is-success ml-1">
                                            Activate
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </section>
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
  
export default ResourceDetail