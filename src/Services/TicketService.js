export default {
    new: ticket => {
        const options = {
            mode: "cors", 
            method: "POST", 
            body: ticket
        };

        return fetch('/ticket', options/* {
            mode: "cors", 
            method: "POST", 
            body: FormData, 
/*             headers: {
                'Content-Type': 'application/json'
            } 
        } */). then(res => res.json().then(data=>data));
    }
}