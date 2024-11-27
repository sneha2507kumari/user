import React , { useState } from "react";
import styles from "./Card.module.css"
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { red } from "@mui/material/colors";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Card = ({userData , userInfoDelete}) => {
    const [userInfo, setUserInfo] = useState({
        userName: userData.name,
        email: userData.email,
        userSubname: userData.username,
      });
      const [open, setOpen] = useState(false);
      const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

      const handleEditChange = (e) => {
        setUserInfo((userData) => ({
          ...userData,
          [e.target.name]: e.target.value,
        }));
      };
    const {id, company} =userData;

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "text.primary",
        border: "1px solid green",
        boxShadow: 24,
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 6,
      };
   
    return(
        <>
        <div className={styles.cardWrapper}>
            <div className={styles.cardHeader}>
            <div className={styles.userName}>{userInfo.userSubname}</div>
            <EditIcon fontSize={"small"}
             onClick={handleOpen}
              />
          <DeleteOutlinedIcon
            sx={{ fontSize: 20, color: red[600] }}
            onClick={userInfoDelete}
          />
            </div>
                <div className={styles.userDetail}>
                    <h3>Id</h3>
                    <h3 className={styles.cardId}>{id}</h3>
                </div>
                <div className={styles.userDetail}>
                    <h3>Name</h3>
                    <h3>{userInfo.userName}</h3>
                </div>
                <div className={styles.userDetail}>
                    <h3>Email</h3>
                    <h3>{userInfo.email}</h3>
                </div>
                <div className={styles.userDetail}>
                    <h3>Company</h3>
                    <h3>{company.name}</h3>
                </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <input
              className="editUser"
              name="userName"
              onChange={handleEditChange}
              placeholder="change the name"
            />
            <input
              className="editUser"
              name="email"
              onChange={handleEditChange}
              placeholder="change the email"
            />
            <input
              className="editUser"
              name="userSubname"
              onChange={handleEditChange}
              placeholder="change the Username"
            />
            <Button
              fullWidth
              variant="contained"
              color="success"
              size="large"
              onClick={handleClose}
            >
              update
            </Button>
          </Box>
        </Modal>
        </>
    )
}

export default Card;