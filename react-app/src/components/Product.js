import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions/product"
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, ButtonGroup, TableCell, TableBody, withStyles, Button } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import ProductForm from './ProductForm'
import { useToasts } from "react-toast-notifications";


const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.5rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    }
})

const Product = ({ classes, ...props }) => {
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllProducts()
    }, [])

    //toast message
    const { addToast } = useToasts()

    const onDelete = id => {
        if (window.confirm('Are you sure you want to delete this product?'))
            props.deleteProduct(id, () => addToast("Product deleted", { appearance: 'success' }))
    }

    return (
        <Paper className={classes.paper} elevation={3}>
           <div> sum: {props.productsQuantity} products </div>
            <Grid container>
                <Grid item xs={12} sm={6} >
                    <ProductForm {...({currentId, setCurrentId})} />
                </Grid>

                <Grid item xs={12}  sm={6}>
                { Object.entries(Object.groupBy(props.productList, ({ categoryId }) => categoryId)).map(productCategory=> (
<>
<div className="py-3">קטגוריה{} {productCategory[0]} - {productCategory[1].length} מוצרים</div>
<ul>{
    productCategory[1].map((record, index) => (
        <li>{record.name} {record.quantity > 1 ? `(${record.quantity})` : ''} </li>
    ))
}</ul>
                  
                   </>                    )) }

               </Grid>

            </Grid>
             </Paper>
    );

}

const mapStateToProps = state => {
    return {
        productList: state.product.list,
        productsQuantity: state.product.quantity,
    }
}

// props.productList
const mapActionToProps = {
    fetchAllProducts: actions.fetchAll,
    deleteProduct: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Product));