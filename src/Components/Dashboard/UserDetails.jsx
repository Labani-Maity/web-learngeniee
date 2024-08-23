import React from 'react'


const UserDetails = () => {
  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")
  const mobile = localStorage.getItem("mobile")

  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">       
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Dashboard</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>User</li>
            </ol>
          </div>
        </div>
      </section>

      <div className="user_dashboard">
      <div className="container">
        <div className="row div_crd">
          <div className="col-4">
            <img style={{ width: '100%', height: '100%' }} src="assets/img/testimonials/testimonials-2.jpg" alt="..." />
          </div>

          <div className="col-8 card_bg">
            <div style={{ textAlign: 'left' }} className="card-body ">
              <h3 className="card-title">Name:{name}</h3>
              <p className="card-text">Email:{email}</p>
              <p className="card-text">Mobile:{mobile}</p>

            </div>
          </div>
        </div>
      </div>
      </div>



    </>
  )
}

export default UserDetails