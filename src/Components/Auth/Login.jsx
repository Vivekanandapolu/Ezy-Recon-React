import "./login.scss";
function Login() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-7 ">
          <div className="first ">
            <img src="/assets/images/logo_2.svg" className="mb-5" alt="" />
            <h6 className="display-5 text">
              Your Trusted <b>Reconciliations</b> Companion
            </h6>
          </div>
        </div>
        <div className="col-5">
          <div className="second">
            <div className="card">
              <div className="card-body p-3">
                <h5 className="form-title">Welcome to Ezy Recon</h5>
                <p className="mb-4 form-text">
                  Sign in using your valid credentials
                </p>
                <form>
                  <div className="input-group mb-3">
                    <span className="input-group-text border-end-0">
                      <i className="ri-mail-line"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 shadow-none"
                      name="usr"
                      id="usr"
                      placeholder="Email id"
                    />
                  </div>
                  <div className="input-group mb-5">
                    <span className="input-group-text border-end-0">
                      <i className="ri-lock-line"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control border-start-0 shadow-none"
                      name="pwd"
                      id="pwd"
                      placeholder="Passsword"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn-primary w-100 p-0 p-2 d-flex justify-content-between"
                  >
                    Sign In <i className="ri-arrow-right-line"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
