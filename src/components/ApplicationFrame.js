// React
import React from 'react'
import PropTypes from 'prop-types'

// Material UI
import Grid from '@material-ui/core/Grid';



const ApplicationFrame = ({
    renderSidebar,
    children,
    ...rest
}) => (
        <Grid container spacing={16} {...rest}>
            {renderSidebar && <Grid item xs={12} md={4}>{renderSidebar()}</Grid>}
            <Grid item xs={12} md={renderSidebar ? 8 : 12}>
                {children}
            </Grid>
        </Grid>
    );



ApplicationFrame.propTypes = {
    renderSidebar: PropTypes.func,
}

export default ApplicationFrame
