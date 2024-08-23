import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchService } from '../../Redux/HomeSlice/ServiceSlice'
import { Puff } from 'react-loader-spinner'


const Service = () => {

  const { service_data } = useSelector((state) => state?.service)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchService())
  }, [])


  // console.log(service_data, "service");

  return (
    <>

      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>Laborum repudiandae omnis voluptatum consequatur mollitia ea est voluptas ut</p>
          </div>
          <div className="row">
            {
              service_data !== null ? (
                <>
                  {
                    service_data?.data?.map((item, index) => {
                      return (
                        <>
                          <div className="col-lg-4 col-md-6 d-flex align-items-stretch service_card" data-aos="zoom-in" data-aos-delay={100}>
                            <div className="icon-box iconbox-red">                             
                              <div className="icon">
                                <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                  <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572" />
                                </svg>
                                <i className="bx bx-slideshow" />
                              </div>

                              <h4><a href='' >{item.name}</a></h4>
                              <p style={{ textAlign: "justify" }}>{item.details.slice(0, 130 )}</p>
                            </div>
                          </div >

                        </>
                      )
                    })
                  }

                </>
              ) : (
                <>

                  <div className='spiner'>
                    <Puff
                      height="60"
                      width="60"
                      radius={1}
                      color="#4fa94d"
                      ariaLabel="puff-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </div>
                </>
              )
            }




          </div>
        </div>
      </section >


    </>
  )
}

export default Service