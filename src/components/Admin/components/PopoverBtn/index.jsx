import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import styles from './PopoverBtn.module.scss';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteModal, setUpdateModal } from '../../../../redux/slices/modalSlice';
import { setProductId } from '../../../../redux/slices/productsSlice';

function PopoverBtn({ id }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const dispatch = useDispatch();
  const { updateModal } = useSelector((state) => state.modal);
  const { productId } = useSelector((state) => state.products);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleEdit = () => {
    dispatch(setProductId(id));
    dispatch(setUpdateModal(true));
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleDelete = () => {
    console.log('Delete button clicked');
    console.log(id);
    dispatch(setProductId(id));
    dispatch(setDeleteModal(true));
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div className={styles.root}>
      <Stack direction="row" spacing={2}>
        <div>
          <svg
            height="30px"
            width="35px"
            viewBox="0 0 30.055 32.055"
            stroke="#ffffff"
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <g>
              <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967 C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967 s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967 c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"></path>{' '}
            </g>
          </svg>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={updateModal}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                    >
                      <MenuItem onClick={handleClose}>
                        <div onClick={handleEdit}>
                          <EditOutlined />
                          <span style={{ marginLeft: '10px' }}>Изменить</span>
                        </div>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <div onClick={handleDelete}>
                          <DeleteOutlined />
                          <span style={{ marginLeft: '10px' }}>Удалить</span>
                        </div>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    </div>
  );
}

export default PopoverBtn;
