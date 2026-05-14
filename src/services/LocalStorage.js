export const setItem = (key, value) => {
    try {
        localStorage.setItem(key, value)
    } catch (error) {
        console.log("error set item");
    }
}

export const getItem = (key) => {
    try {
       return localStorage.getItem(key)
    } catch (error) {
        console.log("error get item");
    }
}

export const revomeItem = (key) => {
    try {
        localStorage.removeItem(key)
    } catch (error) {
        console.log("Error log out");
    }
}