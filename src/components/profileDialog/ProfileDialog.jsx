import React, { useRef, useState, useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios"
import { AuthContext } from "../../state/AuthContext"
import "./ProfileDialog.css";



export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const { user, dispatch } = useContext(AuthContext);

    const desc = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    //更新押下時
    const handleChange = async () => {
        if (desc.current.value) {
            const data = {
                desc: desc.current.value,
                userId: user._id,
            };
            await axios.put(`/users/${user._id}`, data);
            setOpen(false);
        } else {
            alert("自己紹介文を入力してください。");
        }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        プロフィールを変更する
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>プロフィールの変更</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="dlgConTxt">一言自己紹介では趣味や特技を記入しましょう！誹謗中傷はNGです。</div>
          </DialogContentText>
            <textarea
                type="text"
                margin="dense"
                id="desc"
                placeholder="一言メッセージ"
                variant="standard"
                rows="10"
                cols="60"
                ref={ desc }
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleChange} type="submit">更新</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
