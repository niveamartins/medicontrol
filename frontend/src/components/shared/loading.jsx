
import ReactLoading from 'react-loading';

function Loading() {

    const style = {
        type: "balls",
        color: "#4169E1",
        height: 667,
        width: 375
    }

    return (
        <ReactLoading type={style.type} color={style.color} height={style.height} width={style.width} />
    );
  }
  
  export default Loading;
  