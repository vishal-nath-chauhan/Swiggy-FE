import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import axios from 'axios'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal=(props)=> {
  const {handleClose,open,data,handleChange,handleUpdate}=props;
 
  return (
    <div>
      {/*<Button onClick={handleOpen}>Open modal</Button>*/}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <form onSubmit={(e)=>{e.preventDefault();handleUpdate(data.id)}}>
              <label for="title">Title</label>
              <input type="text" id="title" onChange={handleChange} defaultValue={data?data.title:""}/>
              <br/>
              <label for="body">Body</label>
              <textarea id="body" style={{width:'10rem',height:'10rem'}} onChange={handleChange} defaultValue={data?data.body:""}></textarea>
              {/* {<input type="text" id="body" onChange={handleChange} defaultValue={data?data.body:""}/>} */}
              <br/>
              <input type='submit' value='update' />
            </form>
            {/* {data?
            data.map((item)=>{
            return <div><div>{item.title}</div><div>{item.body}</div></div>
                  }):<div>Loader</div> } */}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default BasicModal;