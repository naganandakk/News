import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import queryString from 'query-string';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3),
        display: 'flex',
        width: theme.spacing(50)
    }
}));

const Form = (props) => {
    const classes = useStyles();
    const [formFields, setFormFields] = useState({
        exactPhrase: '', hasWords: '', excludeWords: '', website: ''
    });

    const handleChange = name => event => {
        setFormFields({ ...formFields, [name]: event.target.value });
    };

    const renderFormFields = () => {
        const formFieldList = [
            { label: 'Exact phrase', key: 'exactPhrase' },
            { label: 'Has words', key: 'hasWords' },
            { label: 'Exclude words', key: 'excludeWords' },
            { label: 'Website', key: 'website' }
        ];

        return (

            formFieldList.map(field => {
                return (
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormControlLabel
                            className={classes.formControlLabel}
                            control={
                                <TextField
                                    id={`search-form-${field.key}`}
                                    className={classes.textField}
                                    value={formFields[field.key]}
                                    fullWidth
                                    onChange={handleChange(field.key)}
                                    margin="normal"
                                    inputProps={{ 'aria-label': field.label }}
                                />
                            }
                            label={field.label}
                            labelPlacement="start"
                        />
                    </FormControl>
                )
            })
        )
    }

    const formHasData = () => {
        Object.keys(formFields).forEach(key => {
            if (formFields[key]) {
                return true;
            }
        });

        return true;
    }

    const clearFormFields = () => {
        setFormFields(_.mapValues(formFields, () => ''));
    }

    const handleSubmit = () => {
        const queryParams = {};

        if (formFields.website) {
            queryParams.website = formFields.website;
        }

        queryParams.q = formFields.hasWords.trim();

        props.onSubmit(queryString.stringify(queryParams));
    }

    useEffect(() => {
        const queryParams = queryString.parse(props.queryString);
        const searchTerm = queryParams.q || '';
        const newFormFields = {
            hasWords: '', exactPhrase: '', excludeWords: ''
        };

        searchTerm.split().forEach(term => {
            term = term.trim();

            switch (term[0]) {
                case '~':
                    newFormFields.excludeWords = `${newFormFields.excludeWords}${term.substr(1)} `;
                    break;
                case '+':
                    newFormFields.exactPhrase = `${newFormFields.exactPhrase}${term.substr(1)} `
                    break;
                default:
                    newFormFields.hasWords = `${newFormFields.hasWords}${term} `;
                    break;
            }
        });

        setFormFields(newFormFields);
    }, [props.queryString]);

    return (
        <div className={classes.formContainer}>
            <div className={classes.form}>
                <FormLabel component="legend">Narrow your search results</FormLabel>
                {renderFormFields()}
            </div>

            <div className={classes.formActions}>
                <Button
                    disabled={!formHasData()}
                    onClick={clearFormFields}
                >
                    Clear
                </Button>
                <Button
                    onClick={handleSubmit}
                    disabled={!formHasData()}
                    size="small"
                    variant="contained"
                    color="primary"
                >
                    Search
                </Button>
            </div>
        </div>
    );
}

export default Form;