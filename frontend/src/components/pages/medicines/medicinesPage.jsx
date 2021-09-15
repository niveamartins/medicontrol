import {useState, useEffect} from 'react'
import Loading from '../../shared/loading';
import Medicine from './medicine';

function MedicinesPages() {
    const [medicines, setMedicines] = useState(undefined)

    useEffect(() => {
        setMedicines([])
    }, [])


    if (medicines === undefined) {
        return (<Loading/>)
    } else if (medicines.length === 0) {
        return (
            <>
            </>
        )
    } else {
        return (
            <>
              {medicines.map((medicine) => {
                  return (
                      <Medicine data={medicine}/>
                  )
              })}

              <button>Adicionar Medicamento</button>
            </>
          );
    }
  }
  
  export default MedicinesPages;
  