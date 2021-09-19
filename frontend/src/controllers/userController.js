import instance from "../instance"


export default function login(data, setUserData) {
    instance.post("/auth/signin", data).then((response) => {
        setUserData(response.data)

    }).catch((err) => {
        console.log(err)
        return false
    })
}


export default function register(data) {
    instance.post("/auth/signup", data).then(() => {
        return true;
    }).catch((err) => {
        console.log(err)
        return false
    })
}

export default function logout(token) {
    instance.post("/auth/logout", token).then(() => {
        return true;
    }).catch((err) => {
        console.log(err)
        return false
    })
}


