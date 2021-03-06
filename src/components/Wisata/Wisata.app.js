import React, { Component } from 'react'

import Album from './components/album'

class WisataApp extends Component {

    render() {

        return (
            <main role="main">

                <section className="jumbotron text-center">
                    <div className="container">
                        <h1>Wista</h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
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
        );
    }
}

export default WisataApp