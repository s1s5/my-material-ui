import * as React from 'react'

import { Popover, Badge, IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';

type Props = {
    
}

const Notifications = (props: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
    
    const handleClick = (event: React.MouseEvent) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const open = Boolean(anchorEl);
    const id = open ? 'notifications-icon-popover' : undefined;

    return (<>
        <IconButton color="inherit" aria-describedby={id} onClick={handleClick}>
          <Badge
              badgeContent={ 4 }
              color="error"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Popover 
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
          The content of the Popover.
        </Popover>
        </>)
}

export default Notifications
