import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Box from "@mui/material/Box";
import {  CircularProgress } from "@mui/material";
import styles from "./Dashboard.module.css";
import Footer from "../Footer/Footer";

const DashBoard = () => {
  const [users, setUsers] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = Math.ceil(users.length / 3);
  const firstIndex = (currentPage - 1) * 3;
  const lastIndex = firstIndex + 3;
  const dataperPage = users.slice(firstIndex, lastIndex);

  const getUsersInfo = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
      setLoading(false);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    getUsersInfo();
  }, []);

  const handleUserDelete = (userId) => {
    setLoading(true);
    setUsers((oldUser) => oldUser.filter((user) => user.id !== userId));
    setLoading(false);
  };

  return (
    <>
      <Box>
        {loading ? (
          <Box
            className="loading"
            position={"absolute"}
            top={"70vh"}
            left={"50vw"}
          >
            <CircularProgress />
            <h3> Loading Users Info... </h3>
          </Box>
        ) : dataperPage.length ? (
          <div className={styles.cardBody}>
            {dataperPage.map((user) => {
              return (
                <Card
                  key={user.id}
                  userData={user}
                  userInfoDelete={() => handleUserDelete(user.id)}
                />
              );
            })}
          </div>
        ) : (
          <h4>{null}</h4>
        )}
      </Box>
      {!loading ? (
        <Footer
          pages={totalPage}
          key={firstIndex}
          handlePage={setCurrentPage}
          onpage={currentPage}
        />
      ) : (
        <h1>{null}</h1>
      )}
    </>
  );
};

export default DashBoard;
