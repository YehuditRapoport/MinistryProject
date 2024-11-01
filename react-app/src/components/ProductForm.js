import React, {useEffect } from "react";
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from "@material-ui/core";
import useForm from "./useForm"
import { connect } from 'react-redux';
import * as productActions from "../actions/product"
import * as categoryActions from "../actions/category"

import { useToasts } from "react-toast-notifications";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
    },
    smMargin: {
        margin: theme.spacing(1)
    },
    mdMargin: {
        margin: theme.spacing(2)
    }
})


const initialFieldValues = {
    name: '',
    quantity: "1",
    categoryId:"",
}


const ProductForm = ({ classes, ...props }) => {
    //toast msg.
    const { addToast } = useToasts()


    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "This field is required."
        if ('quantity' in fieldValues)
            temp.quantity = fieldValues.quantity ? "" : "This field is required."
        // if ('addedToCart' in fieldValues)
        //     temp.addedToCart = fieldValues.addedToCart ? "" : "This field is required."
        setErrors({
            ...temp
        })

        // if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const handleCategoryChange = (event) => {
        setValues({
            ...values,
            categoryId: event.target.value,
        });
    };
    
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, validate, props.setCurrentId)



    //material-ui select component - label width fix
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    useEffect(() => {
        props.fetchAllCategories()
    }, [])


    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const onSuccess = () => {
                resetForm()
                addToast("Submitted successfully", { appearance: 'success' })
            }
            if (props.currentId == 0)
                props.createProduct(values, onSuccess)
            else
                props.updateProduct(props.currentId, values, onSuccess)
        }
    }

    useEffect(() => {
        if (props.currentId != 0) {
            setValues({
                ...props.productList.find(x => x.id === props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId, props.productList, setErrors, setValues])



    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="name"
                        variant="outlined"
                        label="Product name"
                        value={values.name}
                        onChange={handleInputChange}
                        // error={true}
                        {...(errors.name && { error: true, helperText: errors.name })}
                    />
                    <TextField
                        name="quantity"
                        variant="outlined"
                        label="Quantity"
                        value={values.quantity}
                        onChange={handleInputChange}
                        // {...(errors.quantity && { error: true, helperText: errors.quantity })}
                        />
                    
                    <FormControl variant="outlined"
                        className={classes.formControl}>
                        <InputLabel ref={inputLabel}>Category</InputLabel>
                        <Select
                            name="category"
                            value={values.categoryId}
                            onChange={handleCategoryChange}
                            labelWidth={labelWidth}
                        >
                           { props.categoryList.map((record, index) =>  <MenuItem key={record.id} value={record.id}>{record.title}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.mdMargin}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            color="default"
                            className={classes.mdMargin}
                            onClick={resetForm}
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
}

const mapStateToProps = state => {
    console.log("mapStateToProps", state);
    return {
        productList: state.product.list,
        categoryList: state.category.list
    }
}

// props.productList
const mapActionToProps = {
    createProduct: productActions.create,
    updateProduct: productActions.update,
    fetchAllCategories: categoryActions.fetchAll
}


export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(ProductForm));