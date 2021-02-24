import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Layout from "./layout/index";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AddIcon from "@material-ui/icons/Add";
import Title from "./components/Title";
import axios from "../config/axios";
import { Button } from "react-bootstrap";
import { VISIBILITY_FILTERS } from "../static/constants";
import { getProductsByFilter } from "../store/selectors";
import "./style.admin.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TablePagination } from "@material-ui/core";
import { addProducts, UpdataProducts } from "../store/actions/Action.product";
import { FaWindowClose } from "react-icons/fa";

import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
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
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));
function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function Stock(props) {
  const classes = useStyles();
  const [showForm, setShowForm] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(-1);
  const showform = (index) => {
    if (activeTab === index) {
      setActiveTab(-1);
    } else setActiveTab(index);
  };
  const showformAdd = (show) => {
    if (show === true) {
      setShowForm(true);
      setActiveTab(-1);
    } else setShowForm(false);
  };
  const dataform = [
    {
      id: null,
      name: null,
      slug: null,
      des: null,
      quantity: null,
      price: null,
      discount_price: null,
      category: null,
      subcategory: null,
      sale: null,
    },
  ];
  const [formData, setform] = React.useState(dataform);

  const [uploadfile, setFile] = React.useState(null);
  const handleChange = (e) => {
    setform({ ...formData, [e.target.name]: e.target.value });
    console.log("handle Change:", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    const data = {};

    if (uploadfile !== null) {
      form.append("uploadfile", uploadfile);
      console.log("uploadfile", uploadfile);
    }
    props.EditProduct(formData.id, form);
    if (formData.name !== undefined) {
      // form.append("name", formData.name);
      data["name"] = formData.name;
    }
    if (formData.slug !== undefined) {
      // form.append("slug", formData.slug);
      data["slug"] = formData.slug;
    }
    if (formData.des !== undefined) {
      // form.append("des", formData.des);
      data["des"] = formData.des;
    }
    if (formData.quantity !== undefined) {
      // form.append("quantity", formData.quantity);
      data["quantity"] = formData.quantity;
    }
    if (formData.price !== undefined) {
      // form.append("price", formData.price);
      data["price"] = formData.price;
    }
    if (formData.discount_price !== undefined) {
      // form.append("discount_price", formData.discount_price);
      data["discount_price"] = formData.discount_price;
    }
    if (formData.category !== undefined) {
      form.append("category", formData.category);
      data["category"] = formData.category;
    }
    if (formData.subcategory !== undefined) {
      // form.append("subcategory", formData.subcategory);
      data["subcategory"] = formData.subcategory;
    }
    if (formData.sale !== undefined) {
      // form.append("sale", formData.sale);
      data["sale"] = formData.sale;
    }
    if (Object.keys(data).length > 1) {
      // props.EditProduct(formData.id, data);
    }

    setform(dataform);
    setActiveTab(-1);
  };
  const handleSubmitAdd = (e) => {
    e.preventDefault();
    const form = new FormData();
    if (uploadfile !== null) {
      form.append("uploadfile", uploadfile);
    }
    if (formData.name !== undefined) {
      form.append("name", formData.name);
    }
    if (formData.slug !== undefined) {
      form.append("slug", formData.slug);
    }
    if (formData.des !== undefined) {
      form.append("des", formData.des);
    }
    if (formData.quantity !== undefined) {
      form.append("quantity", formData.quantity);
    }
    if (formData.price !== undefined) {
      form.append("price", formData.price);
    }
    if (formData.discount_price !== undefined) {
      form.append("discount_price", formData.discount_price);
    }
    if (formData.category !== undefined) {
      form.append("category", formData.category);
    }
    if (formData.subcategory !== undefined) {
      form.append("subcategory", formData.subcategory);
    }
    if (formData.sale !== undefined) {
      form.append("sale", formData.sale);
    }

    console.log(form);
    props.AddProduct(form);
    setform(dataform);
    setShowForm(false);
    props.history.push("/admin/stock");
  };

  const deleteProduct = (id) => {
    console.log("Delete :", id);
    axios.delete(`product/${id}`).then((res) => {
      console.log(res);
    });
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, props.products.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
                    <TableCell>Subcategory</TableCell>
                    <TableCell>Sale</TableCell>
                    <div className="con-table">
                      <span>
                        <Button
                          className="btn-add-data"
                          onClick={() => showformAdd(true)}
                        >
                          <AddIcon />
                          <span>Add</span>
                        </Button>
                      </span>
                    </div>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.products.length > 0 &&
                    props.products
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, i) => (
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
                            <TableCell>{row.subcategory}</TableCell>
                            <TableCell>{row.sale}</TableCell>
                            <div className="con-button">
                              <Button onClick={() => showform(i)}>Edit</Button>
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

                          {activeTab === i ? (
                            <TableRow className="table-Row">
                              <TableCell>
                                <p>Id</p>
                                <input
                                  type="text"
                                  name="id"
                                  value={formData.id}
                                  onChange={handleChange}
                                  placeholder={row.id}
                                ></input>
                                <p>name</p>
                                <input
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  placeholder={row.name}
                                ></input>
                              </TableCell>
                              <TableCell>
                                <p>slug</p>
                                <input
                                  type="text"
                                  name="slug"
                                  value={formData.slug}
                                  onChange={handleChange}
                                  placeholder={row.slug}
                                ></input>
                                <p>des</p>
                                <input
                                  type="text"
                                  name="des"
                                  value={formData.des}
                                  onChange={handleChange}
                                  placeholder={row.des}
                                ></input>
                              </TableCell>
                              <TableCell>
                                <p>quantity</p>
                                <input
                                  type="text"
                                  name="quantity"
                                  value={formData.quantity}
                                  onChange={handleChange}
                                  placeholder={row.quantity}
                                ></input>

                                <p>price</p>
                                <input
                                  type="text"
                                  name="price"
                                  value={formData.price}
                                  onChange={handleChange}
                                  placeholder={row.price}
                                ></input>
                              </TableCell>
                              <TableCell>
                                <p>discount_price</p>
                                <input
                                  type="text"
                                  name="discount_price"
                                  value={formData.discount_price}
                                  onChange={handleChange}
                                  placeholder={row.discount_price}
                                ></input>
                                <p>category</p>
                                <input
                                  type="text"
                                  name="category"
                                  value={formData.category}
                                  onChange={handleChange}
                                  placeholder={row.category}
                                ></input>
                              </TableCell>
                              <TableCell>
                                <p>subcategory</p>
                                <input
                                  type="text"
                                  name="subcategory"
                                  value={formData.subcategory}
                                  onChange={handleChange}
                                  placeholder={row.subcategory}
                                ></input>
                                <p>sale</p>
                                <input
                                  type="text"
                                  name="sale"
                                  value={formData.sale}
                                  onChange={handleChange}
                                  placeholder={row.sale}
                                ></input>
                              </TableCell>
                              <TableCell>
                                <p>file Image</p>
                                <input
                                  type="file"
                                  multiple
                                  onChange={(e) => setFile(e.target.files[0])}
                                  name="uploadfile"
                                  // value={formData.uploadfile}
                                />
                              </TableCell>
                              <TableCell>
                                <div
                                  className="con-button-close"
                                  onClick={() => showform(-1)}
                                >
                                  <FaWindowClose />
                                </div>
                                <div className="con-button-update">
                                  <Button onClick={handleSubmit}>Update</Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ) : null}
                        </>
                      ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                  <TablePagination
                    rowsPerPageOptions={[5, 15, 25, 50, 100]}
                    count={props.products.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { "aria-label": "rows per page" },
                      native: true,
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableBody>
              </Table>
              {showForm === true ? (
                <TableRow className="table-Row">
                  <TableCell>
                    <p>name</p>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={"name"}
                    ></input>
                    <p>slug</p>
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug}
                      onChange={handleChange}
                      placeholder={"slug"}
                    ></input>
                  </TableCell>
                  <TableCell>
                    <p>des</p>
                    <input
                      type="text"
                      name="des"
                      value={formData.des}
                      onChange={handleChange}
                      placeholder={"des"}
                    ></input>
                    <p>quantity</p>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder={"quantity"}
                    ></input>
                  </TableCell>
                  <TableCell>
                    <p>price</p>
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder={"price"}
                    ></input>
                    <p>discount_price</p>
                    <input
                      type="text"
                      name="discount_price"
                      value={formData.discount_price}
                      onChange={handleChange}
                      placeholder={"discount_price"}
                    ></input>
                  </TableCell>
                  <TableCell>
                    <p>category</p>
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      placeholder={"category"}
                    ></input>
                    <p>subcategory</p>
                    <input
                      type="text"
                      name="subcategory"
                      value={formData.subcategory}
                      onChange={handleChange}
                      placeholder={"subcategory"}
                    ></input>
                  </TableCell>
                  <TableCell>
                    <p>sale</p>
                    <input
                      type="text"
                      name="sale"
                      value={formData.sale}
                      onChange={handleChange}
                      placeholder={"sale"}
                    ></input>
                    <input
                      type="file"
                      multiple
                      onChange={(e) => setFile(e.target.files[0])}
                      name="uploadfile"
                      // value={formData.uploadfile}
                    />
                  </TableCell>

                  <TableCell>
                    <div
                      className="con-button-close"
                      onClick={() => showformAdd(false)}
                    >
                      <FaWindowClose />
                    </div>
                    <Button
                      className="con-button-update"
                      onClick={handleSubmitAdd}
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ) : null}
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
    AddProduct: (product) => dispatch(addProducts(product)),
  };
};
Stock.propTypes = {
  products: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stock);
