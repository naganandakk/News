import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import queryString from 'query-string';

const useStyles = makeStyles(theme => ({
    formContainer: {
        padding: theme.spacing(2)
    },
    formActions: {
        textAlign: 'right'
    },
    formBtn: {
        textTransform: 'none'
    },
    formLabel: {
        fontSize: '0.8rem'
    }
}));

const Form = (props) => {
    const classes = useStyles();
    const [formFields, setFormFields] = useState({
        exactPhrase: '', hasWords: '', excludeWords: '', domains: ''
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
            { label: 'Website', key: 'domains' }
        ];

        return (
            formFieldList.map(field => {
                return (
                    <TextField
                        key={field.key}
                        id={`search-form-${field.key}`}
                        value={formFields[field.key]}
                        fullWidth
                        label={field.label}
                        onChange={handleChange(field.key)}
                        margin="normal"
                        inputProps={{ 'aria-label': field.label }}
                    />
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
        if (formFields.domains && formFields.domains.trim()) {
            queryParams.domains = formFields.domains.trim();
        }

        return queryString.stringify(queryParams);
    }

    const handleSubmit = () => {
        props.onSubmit(buildQuery());
    }

    useEffect(() => {
        const queryParams = queryString.parse(props.queryString);
        let searchTerm = queryParams.q || '';
        const newFormFields = {
            hasWords: '', exactPhrase: '', excludeWords: '', domains: queryParams.domains || ''
        };

        // Get phrase inside ""
        const phraseMatch = searchTerm.match(/"([^"]+)"/);
        if (phraseMatch && phraseMatch.length) {
            newFormFields.exactPhrase = phraseMatch[0].substr(1, phraseMatch[0].length - 2);
            
            // Update searchTerm to remove the match
            searchTerm = searchTerm.replace(/"([^"]+)"/, '');
        }

        searchTerm.split(' ').forEach(term => {
            term = term.trim();

            switch (term[0]) {
                case '~':
                    newFormFields.excludeWords = `${newFormFields.excludeWords}${term.substr(1)} `;
                    break;
                default:
                    newFormFields.hasWords = `${newFormFields.hasWords}${term} `;
                    break;
            }
        });

        newFormFields.hasWords = newFormFields.hasWords.trim();
        newFormFields.excludeWords = newFormFields.excludeWords.trim();
        newFormFields.exactPhrase = newFormFields.exactPhrase.trim();

        setFormFields(newFormFields);
    }, [props.queryString]);

    const hasData = formHasData();

    return (
        <div className={classes.formContainer}>
            <div className={classes.form}>
                <FormLabel className={classes.formLabel} component="legend">Narrow your search results</FormLabel>
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