export const Footer = () => {
    return (
<div >
  <footer className="text-center text-lg-start text-black" style={{ backgroundColor: "#FFFFFF", margin: "0px"}}>
    <section
            classNameName="d-flex justify-content-between p-4" style={{ backgroundColor: "#000000"}}>
                    <div className="me-5" style={{border: '1px solid black'}}>
        <span></span>
    </div>
{/*
      <div>
        <a href="" className="text-black me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="" className="text-black me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="" className="text-black me-4">
          <i className="fab fa-google"></i>
        </a>
        <a href="" className="text-black me-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="" className="text-black me-4">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="" className="text-black me-4">
          <i className="fab fa-github"></i>
        </a>
      </div> */}
    </section>

    <section className="">
      <div className="container text-center text-md-start mt-5">

        <div className="row mt-3">

          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

            <h6 className="text-uppercase fw-bold">
CiCi</h6>
            <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#000000", height: "2px"}}
                />
            <p>
              Bài tập 2 Shopping cart
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#000000", height: "2px"}}
                />
            <p>
              <a href="#!" className="text-black">Bootstrap</a>
            </p>
            <p>
              <a href="#!" className="text-black">WordPress</a>
            </p>
            <p>
              <a href="#!" className="text-black">BrandFlow</a>
            </p>
            <p>
              <a href="#!" className="text-black">Bootstrap Angular</a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#000000", height: "2px"}}
                />
            <p>
              <a href="#!" className="text-black">Your Account</a>
            </p>
            <p>
              <a href="#!" className="text-black">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" className="text-black">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" className="text-black">Help</a>
            </p>
          </div>



          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor: "#000000", height: "2px"}}
                />
            <p><i className="fas fa-home mr-3"></i>2111COMP103101</p>
            <p><i className="fas fa-envelope mr-3"></i>Vĩnh Thuận</p>
            <p><i className="fas fa-phone mr-3"></i>An Bình</p>
            <p><i className="fas fa-print mr-3"></i>Đinh Vy</p>
          </div>

        </div>

      </div>
    </section>


  </footer>


</div>

    )
}