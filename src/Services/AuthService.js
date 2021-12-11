export default {
    login: user => {
        return fetch('/users/login', {
        //return fetch('http://localhost:5000/users/login', {
            mode: "cors",
            withCredentials: 'true',
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status !== 401)
                return res.json().then(data => data);
            else
                 return { isAuthenticated: false, user: { userName: "" , isAdmin: false}, message: {msgBody: "Wrong username or password, please try again. ", msgError: true} };
        });
    },
    register: user => {
        return fetch('/users/register', {
            mode: "cors",
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated: false, user: { userName: "" } };
        });
    },
    logout: () => {
        return fetch('/users/logout', {mode: "cors"})
            .then(res => res.json())
            .then(data => data);
    },
    isAuthenticated: () => {
        return fetch('/users/authenticated', {mode: "cors"})
        //return fetch('http://localhost:5000/users/authenticated')
            .then(res => {
                if (res.status !== 401)
                    return res.json().then(data => data);
                else
                    return { isAuthenticated: false, user: { userName: "", isAdmin: false } };
            })
    },
    isAdmin: () => {
        return fetch('/users/admin', {mode: "cors"})
            .then(
                res => {
                    if (res.status !== 401)
                        return res.json().then(data => data);
                    else
                        return { isAuthenticated: false, user: { userName: "" } };
                })
    }, 
    changePassword: user =>{
        return fetch('/users/update', {

                mode: "cors",
                withCredentials: 'true',
                method: "PATCH",
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if (res.status !== 401)
                    return res.json().then(data => data);
                else
                     return { isAuthenticated: false, user: { userName: "" , isAdmin: false}, message: {msgBody: "Wrong username or password, please try again. ", msgError: true} };
            });
    }
}