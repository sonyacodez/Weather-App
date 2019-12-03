import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import StateStoreContext from '../../stores/StateStore';
import { Tooltip, IconButton } from '@material-ui/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';

export const UnFavoriteButton = observer(({cityName}) => {
    const classes = useStyles();
    const stateStore = useContext(StateStoreContext);
    return (
        <Tooltip title="Remove from Favorites">
            <IconButton className={classes.iconButton}
                    onClick={() => stateStore.deleteFavoriteCity(cityName)}>
                <FontAwesomeIcon icon={faHeart} color="red" />
            </IconButton>
        </Tooltip>
    );
});

const useStyles = makeStyles(() => ({
    iconButton: {
        fontSize: "2.5vh"
    }
}));