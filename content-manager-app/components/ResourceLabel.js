


const ResourceLabel  = ({status}) =>{
    return(
       <>
        <span className={`tag is-lage ml-3 resource-${status}`} >
                            {status}
                          </span>
       </> 
    )
}
export default ResourceLabel