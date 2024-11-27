import styles from "./Footer.module.css"

const Footer = ({ pages, handlePage, onpage }) => {
    const pageButtons = () => {
      const buttons = [];
      for (let i = 1; i <= pages; i++) {
        buttons.push(
          <button key={i} onClick={() => handlePage(i)}>
            {i}
          </button>
        );
      }
      return buttons;
    };
    const goToFirst = () => {
      handlePage(1);
    };
    const goToLast = () => {
      handlePage(pages);
    };
    const backPage = () => {
      handlePage((prevPage) => prevPage - 1);
    };
    const nextPage = () => {
      handlePage((prevPage) => prevPage + 1);
    };
    return (
      <div className={styles.forwardBackward}>
        <button onClick={goToFirst} disabled={onpage === 1}>
          {"<<"}
        </button>
        <button onClick={backPage} disabled={onpage === 1}>
          {"<"}
        </button>
        {pageButtons()}
        <button onClick={nextPage} disabled={onpage === pages}>
          {">"}
        </button>
        <button onClick={goToLast} disabled={onpage === pages}>
          {">>"}
        </button>
      </div>
    );
  };
  
  export default Footer;