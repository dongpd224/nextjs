import Layout from "../../components/Layout"
import axios from 'axios'
import ResourceForm from "../../components/ResourceForm"
import { useRouter } from "next/router";

function ResourceCreate() {
    const router = useRouter()
    const createResource = (formData) => {
        axios.post("../api/resources", formData)
             .then(_ => router.push("/"))
            .catch(err => alert(err?.response?.data));
    }

    return (
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2 mt-4">
                        <ResourceForm onFormSubmit ={createResource}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default ResourceCreate