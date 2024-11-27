import styles from "./Errors.module.css";
import { useRouteError } from "react-router-dom";

const Errors = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div className={styles.errorwrapper}>
            <h1>OOPS!!</h1>
            <h2>Something went wrong !!!!</h2>
            <h2>{err.data}</h2>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
}

export default Errors;