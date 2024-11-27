import styles from "./NewUser.module.css"
import { FormGroup ,FormControl, InputLabel,Input, Typography , Button } from '@mui/material';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const NewUser = () => {
        const [user , setUser] = useState({
            name :'',
            username: '',
            email: '',
            company:'',        
        });
        const navigate = useNavigate();
        const handleValueChange = (e) =>{
            setUser({...user, [e.target.name] : e.target.value});
        }

        const addUser =async (data) => {
            try{
                const res = await axios.post("https://jsonplaceholder.typicode.com/users",data);
                return res;
            }
         catch(error){
            console.log("error while calling api", error.message);
         }
        }

        const handleAddUsersDetails =async () => {
            await addUser(user)
            navigate('/');
        }
    return(
        <FormGroup className={styles.formWrapper}>
            <Typography variant="h3">Add a New User</Typography>
            <FormControl >
                <InputLabel>UserName</InputLabel>
                <Input onChange={handleValueChange} name="username" />
            </FormControl>
            <FormControl >
                <InputLabel>Name</InputLabel>
                <Input onChange={handleValueChange} name="name" />
            </FormControl>
            <FormControl >
                <InputLabel>Email</InputLabel>
                <Input onChange={handleValueChange} name="email" />
            </FormControl>
            <FormControl >
                <InputLabel>Company</InputLabel>
                <Input onChange={handleValueChange} name="company" />
            </FormControl>
            <FormControl>
                <Button className={styles.userBtn} variant="contained"
                onClick={handleAddUsersDetails}
                >Add User</Button>
            </FormControl>
        </FormGroup>
    )
}
export default NewUser;