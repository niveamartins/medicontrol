
import ReactLoading from 'react-loading';

function Loading() {

    const style = {
        type: "balls",
        color: "#3B929C",
        height: 60,
        width: 60
    }

    return (
        <ReactLoading type={style.type} color={style.color} height={style.height} width={style.width} />
    );
  }

  
  
  export default Loading;
  