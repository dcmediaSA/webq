import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default function SEO({ title }) {
    return <Helmet title={title} titleTemplate="%s | WebQ" />;
}

SEO.propTypes = {
    title: PropTypes.string.isRequired,
};
