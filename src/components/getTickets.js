export const search = async (query) => {
    const apiUrl = `https://damp-river-45159.herokuapp.com/ticket?ticketNumber=${query}`;
    const res = await fetch(apiUrl);
    if (!res.ok) {
        throw new Error(`error loading search results (${res.status})`);
    }
    return res.json();
}