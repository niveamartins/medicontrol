import instance from "../instance"


export default function getMedicines(token, setMedicines) {
    instance.get("/medicine/all", {
        headers: {
            Authorization: "Bearer " + token
        }
    }).then((response) => {
        setMedicines(response.data)

    }).catch((err) => {
        console.log(err)
        return false
    })
}

export default function sendMedicine(token, actionURL, data) {
    instance.post(actionURL, data, {
        headers: {
            Authorization: "Bearer " + token
        }
    }).then(() => {
        return true
    }).catch((err)=> {
        console.log(err);
        return false
    })
}
