import React from 'react'

const Map = () => {
    return (
        <>
            <section id="breadcrumbs" class="breadcrumbs">
                <div class="container">

                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Contact</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Contact</li>
                        </ol>
                    </div>

                </div>
            </section>

            <div class="map-section">
                <iframe style={{ border: 0, width: '100%', height: '350px' }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14736.416522488256!2d88.4274345!3d22.5752084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275927b0061ad%3A0x496c2fab98874c86!2sWebskitters%20Technology%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1687872851567!5m2!1sen!2sin" frameborder="0" allowfullscreen></iframe>
            </div>

        </>
    )
}

export default Map