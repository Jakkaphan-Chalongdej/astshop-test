import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "./layout/index";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AddIcon from "@material-ui/icons/Add";
import Title from "./components/Title";
import axios from "../store/actions/axios";
import { Button } from "react-bootstrap";
import { VISIBILITY_FILTERS } from "../static/constants";
import { getProductsByFilter } from "../store/selectors";
import "./style.admin.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { UpdataProducts } from "../store/actions/Action.product";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  container: {
    //marginTop:"-800px",
    width: "auto",
    height: "100vh",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginBottom: "120px",
    marginRight: "140px",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

function Stock(props) {
  const classes = useStyles();
  const [showForm, setShowForm] = React.useState(false);

  const showform = () => {
    setShowForm(!showForm);
  };

  let [formData, setform] = React.useState([
    {
      id: "",
      name: "",
      slug: "",
      des: "",
      quantity: "",
      price: "",
      discount_price: "",
      category: "",
      sale: "",
    },
  ]);

  const handleChange = (e) => {
    setform({ ...formData, [e.target.name]: e.target.value });
    console.log("handle Change:", e.target.value);
  };

  const handleSubmit = (e) => {
    setShowForm(false)
    e.preventDefault();
    const data = {
      id: formData.id,
      name: formData.name,
      slug: formData.slug,
      des: formData.des,
      quantity: formData.quantity,
      price: formData.price,
      discount_price: formData.discount_price,
      category: formData.category,
      sale: formData.sale,
    };
    props.EditProduct(data.id, data);
    props.history.push("/admin/stock");
  };

  const deleteProduct = (id) => {
    console.log("Delete :", id);
    axios.delete(`product/${id}`).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <Layout>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Title>Stock</Title>

              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>slug</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Discount Price</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Sale</TableCell>
                    <div className="con-table">
                      <span>
                        <Button className="btn-add-data">
                          <AddIcon />
                          <span>Add</span>
                        </Button>
                      </span>
                    </div>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.products.length > 0 &&
                    props.products.map((row, i) => (
                      <>
                        <TableRow key={i}>
                          <TableCell>{row.id}</TableCell>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.slug}</TableCell>
                          <TableCell>{row.des}</TableCell>
                          <TableCell>{row.quantity}</TableCell>
                          <TableCell>{row.price}</TableCell>
                          <TableCell>{row.discount_price}</TableCell>
                          <TableCell>{row.category}</TableCell>
                          <TableCell>{row.sale}</TableCell>
                          <div className="con-button">
                            <Button onClick={showform}>Edit</Button>
                            <Button
                              style={{ backgroundColor: "#f50057" }}
                              onClick={() => {
                                deleteProduct(row.id);
                              }}
                            >
                              Delete
                            </Button>
                          </div>
                        </TableRow>
                        {showForm && (
                          <TableRow className="table-Row">
                            <TableCell>
                              <p>id</p>
                              <input
                                name="id"
                                value={formData.id}
                                onChange={handleChange}
                                placeholder={row.id}
                              ></input>
                              <p>name</p>
                              <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={row.name}
                              ></input>
                              <p>slug</p>
                              <input
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                                placeholder={row.slug}
                              ></input>
                              <p>des</p>
                              <input
                                name="des"
                                value={formData.des}
                                onChange={handleChange}
                                placeholder={row.des}
                              ></input>
                              <p>quantity</p>
                              <input
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                placeholder={row.quantity}
                              ></input>
                            </TableCell>
                            <TableCell>
                              <p>price</p>
                              <input
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder={row.price}
                              ></input>
                              <p>discount_price</p>
                              <input
                                name="discount_price"
                                value={formData.discount_price}
                                onChange={handleChange}
                                placeholder={row.discount_price}
                              ></input>
                              <p>category</p>
                              <input
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                placeholder={row.category}
                              ></input>
                              <p>sale</p>
                              <input
                                name="sale"
                                value={formData.sale}
                                onChange={handleChange}
                                placeholder={row.sale}
                              ></input>
                            </TableCell>
                            <TableCell className="con-button-update">
                              <Button onClick={handleSubmit}>Update</Button>
                            </TableCell>
                          </TableRow>
                        )}
                      </>
                    ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: getProductsByFilter(state, VISIBILITY_FILTERS.ALL),
   
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    EditProduct: (id, update) => dispatch(UpdataProducts(id, update)),
  };
};

Stock.propTypes = {
  products: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stock);
