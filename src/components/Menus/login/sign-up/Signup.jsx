import React from "react";
import { connect } from "react-redux";
import { register } from "../../../../store/actions/actionLogin/auth";
import "../sign-in/signin.scss";
import VisibilityIcon from "@material-ui/icons/Visibility";
function Signup(props) {
  const [handleRegister, sethandleRegister] = React.useState({
    successful: false,
  });
  let [formData, setform] = React.useState([
    {
      username: "",
      email: "",
      password: "",
    },
  ]);
  const [type, setType] = React.useState("password");
  const showHide = (e) => {
    e.preventDefault();
    type === "input" ? setType("password") : setType("input");
  };
  const handleChange = (e) => {
    setform({ ...formData, [e.target.name]: e.target.value });
    console.log("handle Change:", e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    props
      .Register(data)
      .then(() => {
        sethandleRegister({
          ...handleRegister,
          successful: true,
        });
      })
      .catch(() => {
        sethandleRegister({ ...handleRegister, successful: false });
      });
  }
  const { message } = props;
  return (
    <>
      <div>
        <div className="signin-wrapper slideDown ">
          {handleRegister && (
            <form className="form-wrapper ">
              <h5>Sign Up</h5>

              <input
                onChange={handleChange}
                value={formData.username}
                name="username"
                placeholder="Username"
                className="form-field"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="form-field"
              />

              <input
                type={type}
                onChange={handleChange}
                value={formData.password}
                name="password"
                placeholder="Password"
                className="form-field"
              />
              <div className="showpass-signup">
                <VisibilityIcon
                  style={{ color: "#57aef5" }}
                  onClick={showHide}
                />
              </div>
              <button onClick={handleSubmit} className="button primary">
                Sign Up
              </button>
            </form>
          )}
          {message && (
            <div className="form-group">
              <div
                className={
                  handleRegister.successful
                    ? "alert alert-success"
                    : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const { message } = state.message;
  return {
    message,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Register: (data) => dispatch(register(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
