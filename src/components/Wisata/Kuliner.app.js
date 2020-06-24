import React from 'react'

import Album from './components/album'
const Kuliner = () => {
    return (
        <main role="main">

            <section class="jumbotron text-center">
                <div class="container">
                    <h1>Kuliner</h1>
                    <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                    <p>
                        <a href="#" class="btn btn-primary my-2">Main call to action</a>
                        <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                    </p>
                </div>
            </section>

                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <Album
                                gambar = "https://ceriatour.com/wp-content/uploads/2018/09/Bromo-Asik-2.jpg"
                                caption="Bromo Asik" 
                             />
       
                            <Album
                                gambar = "https://ceriatour.com/wp-content/uploads/2018/09/Bromo-Asik-2.jpg"
                                caption="This is a wider card with supporting text below as a natural lead-in to additional content" 
                             />              

                            <Album
                                gambar = "https://ceriatour.com/wp-content/uploads/2018/09/Bromo-Asik-2.jpg"
                                caption="This is a wider card with supporting text below as a natural lead-in to additional content" 
                             />                 

                            <Album
                                gambar = "https://ceriatour.com/wp-content/uploads/2018/09/Bromo-Asik-2.jpg"
                                caption="This is a wider card with supporting text below as a natural lead-in to additional content" 
                             />           

                            <Album
                                gambar = "https://ceriatour.com/wp-content/uploads/2018/09/Bromo-Asik-2.jpg"
                                caption="This is a wider card with supporting text below as a natural lead-in to additional content" 
                             />                

                            <Album
                                gambar = "https://ceriatour.com/wp-content/uploads/2018/09/Bromo-Asik-2.jpg"
                                caption="This is a wider card with supporting text below as a natural lead-in to additional content" 
                             />                              
                        </div>
                    </div>
                </div>

        </main>
    )
}

export default Kuliner