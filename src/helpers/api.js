export const sendMessage = (successFunction, object) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: object.name,
            email: object.email,
            message: object.message
        })
    };
    fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.status === "error") {
                successFunction(0);
            } else if (data.status === "success") {
                successFunction(1);
            }
        });
}