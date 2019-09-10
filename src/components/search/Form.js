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
        display: 'flex',
    },
    formControlLabel: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    formContainer: {
        padding: theme.spacing(1)
    },
    formActions: {
    },
    formBtn: {
        textTransform: 'none'
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
    
    const formHasData = () => {
        const keys = Object.keys(formFields);

        for (var idx in keys) {
            if (formFields[keys[idx]].trim( ) !== '') {
                return true;
            }
        }

        return false;
    }

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

    const clearFormFields = () => {
        setFormFields(_.mapValues(formFields, () => ''));
    }

    const buildQuery = () => {
        const queryParams = {
            q: ''
        };

        // Has words
        if (formFields.hasWords && formFields.hasWords.trim()) {
            queryParams.q = `${queryParams.q}${formFields.hasWords.trim()}`;
        }

        // Exact phrase (sorrounded by "")
        if (formFields.exactPhrase && formFields.exactPhrase.trim()) {
            queryParams.q = `${queryParams.q} "${formFields.exactPhrase.trim()}"`
        }

        // Exclude words prepend each word by ~
        if (formFields.excludeWords && formFields.excludeWords.trim()) {
            const wordsToExclude = formFields.excludeWords.trim().split();
            const wordsNegated = wordsToExclude.map(word => "~" + word);

            queryParams.q = `${queryParams.q} ${wordsNegated.join(' ')}`;
        }

        // Website
        if (formFields.website && formFields.website.trim()) {
            queryParams.domains = formFields.website.trim();
        }

        return queryString.stringify(queryParams);
    }

    const handleSubmit = () => {
        props.onSubmit(buildQuery());
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

    const hasData = formHasData();

    return (
        <div className={classes.formContainer}>
            <div className={classes.form}>
                <FormLabel component="legend">Narrow your search results</FormLabel>
                {renderFormFields()}
            </div>

            <div className={classes.formActions}>
                <Button
                    className={classes.formBtn}
                    disabled={!hasData}
                    onClick={clearFormFields}
                >
                    Clear
                </Button>
                <Button
                    className={classes.formBtn}
                    onClick={handleSubmit}
                    disabled={!hasData}
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