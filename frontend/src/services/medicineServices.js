import instance from "../instance"


async function getMedicines(token, setMedicines) {
    await instance.get("/medicine/all", {
        headers: {
            Authorization: "Bearer " + token
        }
    }).then((response) => {
        setMedicines(response.data.data)

    }).catch((err) => {
        console.log(err)
        return false
    })
}

async function sendMedicine(token, actionURL, data) {
    await instance.post(actionURL, data, {
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

export {getMedicines, sendMedicine}
