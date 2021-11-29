const ResourceList = ({ resources }) => {
  console.log(resources)
  return (
    <>
      <section class="hero ">
        <div class="hero-body">
          <div class="container">

            <section class="section">
            <div class ="columns is-variable is-8">
          {resources.map((resource,index) => {
            if (index < 2)
            return (
            <>
            <div class ="column is-5 is-offset-1 ">
            <div class ="content is-medium"></div>
            <h2 class ="subtitle is-5 has-text-grey">{resource.timeToFinish}</h2>
            <h1 class ="title has-text-black is-3">{resource.title}</h1>
            <p class ="has-text-dark">{resource.description}</p>
            </div>
            </>
          )
          
          })}
        </div>
      </section>

      <div class="is-divider"></div>

      <section class="section">
        <div class="columns is-variable is-8">
          <div class="column is-5 is-offset-1">
            <div class="content is-medium">
              <h2 class="subtitle is-5 has-text-grey">December 25, 2018</h2>
              <h1 class="title has-text-black is-3">Getting Started</h1>
              <p class="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
                minimal
                effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                configuration settings can be found in config</p>
            </div>
          </div>
          <div class="column is-5">
            <div class="content is-medium">
              <h2 class="subtitle is-5 has-text-grey">December 25, 2018</h2>
              <h1 class="title has-text-black is-3">Getting Started</h1>
              <p class="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
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