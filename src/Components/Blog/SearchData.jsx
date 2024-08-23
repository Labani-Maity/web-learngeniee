import React from 'react'
import { ThreeCircles } from 'react-loader-spinner';
import { useSearch } from '../../Contex/Search';


const SearchData = () => {
    
    const [values, setValues] = useSearch()
    console.log(values);

  return (
    <>
    <main id="main">
    <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center pt-3">
                            <h2>Search Details</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Search Data</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="blog" className="blog">
                    <div className="container">
                        <div className="row">

                            {values !== null ? (
                                <>
                                    <div className="col-lg-8 entries">
                                        {
                                            values?.results?.map((sData, index) => {
                                                return (
                                                    <>
                                                        <article className="entry entry-single" data-aos="fade-up" key={index}>
                                                            <div className="entry-img"> 
                                                            <img src={`https://restapinodejs.onrender.com/api/blog/image/${sData._id}`} className="card-img-top" alt="..." />
                                                            </div>
                                                            <h2 className="entry-title">
                                                                <a href="blog-single.html">{sData.title}</a>
                                                            </h2>
                                                            <div className="entry-meta">
                                                                <ul>
                                                                    <li className="d-flex align-items-center"><i className="icofont-user" /> <a href="blog-single.html">John Doe</a></li>
                                                                    <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <a href="blog-single.html"><time dateTime="2020-01-01">Jan 1, 2020</time></a></li>
                                                                    <li className="d-flex align-items-center"><i className="icofont-comment" /> <a href="blog-single.html">12 Comments</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="entry-content">
                                                                <p dangerouslySetInnerHTML={{ __html: sData.postText.slice(0,350) }}></p>
                                                            </div>
                                                            <div className="entry-footer clearfix">
                                                                {/* ... */}
                                                            </div>
                                                        </article>
                                                    </>
                                                )
                                            })
                                        }
                                        
                                    </div>
                                    {/* End blog entries list */}
                                    {/* <SearchBox/> */}
                                    {/* End blog sidebar */}
                                </>
                            ) : (
                                <>
                                    <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "150px" }}>
                                        {/* <ThreeCircles
                                            height="90"
                                            width="90"
                                            color="#1bbd36"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                            ariaLabel="three-circles-rotating"
                                            outerCircleColor=""
                                            innerCircleColor=""
                                            middleCircleColor=""
                                        /> */}

                                    </div>
                                </>
                            )}


                        </div>
                    </div>
                </section>

    </main>
 


    </>
  )
}

export default SearchData