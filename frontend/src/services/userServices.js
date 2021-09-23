import instance from "../instance"

async function login(data, setUserData) {
    let status;
    await instance.post("/auth/signin", data).then((response) => {
        setUserData(response.data)
        const token = response.data.token
        localStorage.setItem("token", token)
        status = true;

    }).catch((err) => {
        console.log(err)
        status = false
    })

    return status
}

function verifyLogin(setUserData) {
    const token = localStorage.getItem("token")
    
    if (token) {
        setUserData({
            token: token
        })
        return true
    } else {
        return false
    }
}


async function register(data) {
    let status;

    await instance.post("/auth/signup", data).then(() => {
        status = true;
    }).catch((err) => {
        console.log(err)
        status = false
    })

    return status
}

async function logout(token) {
    let status;
    await instance.post("/auth/logout", token).then(() => {
        status = true;
    }).catch((err) => {
        console.log(err)
        status = false
    })
}

export {login, logout, register, verifyLogin}


