const ResourceList = ({ resources }) => {
  console.log(resources)
  return (
    <>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">

            <section className="section">
            <div className ="columns is-variable is-8">
          {resources.map((resource,index) => {
            if (index < 2)
            return (
            <>
            <div className ="column is-5 is-offset-1 ">
            <div className ="content is-medium"></div>
            <h2 className ="subtitle is-5 has-text-grey">{resource.timeToFinish}</h2>
            <h1 className ="title has-text-black is-3">{resource.title}</h1>
            <p className ="has-text-dark">{resource.description}</p>
            </div>
            </>
          )
          
          })}
        </div>
      </section>

      <div className="is-divider"></div>

      <section className="section">
        <div className="columns is-variable is-8">
          <div className="column is-5 is-offset-1">
            <div className="content is-medium">
              <h2 className="subtitle is-5 has-text-grey">December 25, 2018</h2>
              <h1 className="title has-text-black is-3">Getting Started</h1>
              <p className="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
                minimal
                effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                configuration settings can be found in config</p>
            </div>
          </div>
          <div className="column is-5">
            <div className="content is-medium">
              <h2 className="subtitle is-5 has-text-grey">December 25, 2018</h2>
              <h1 className="title has-text-black is-3">Getting Started</h1>
              <p className="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
                minimal
                effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                configuration settings can be found in config</p>
            </div>
          </div>
        </div>
      </section>


    </div>
    </div >
  </section >

        </>
    )
}
export default ResourceList