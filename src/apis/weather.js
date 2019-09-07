import axios from 'axios';

const apiKeys = [
    "c49a84ffd38cc57003d2a4c2c8a799f5"
]

const client = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/forecast"
})

client.interceptors.request.use((request) => {
    const apiKeyIndex = Math.floor((Math.random() * apiKeys.length));
    const apiKey = apiKeys[apiKeyIndex];

    // Default query parameters
    const defaultQueryParams = {
        appid: apiKey,
        id: "1277333"
    };

    request.params = { ...defaultQueryParams, ...request.params };
    
    return request;
});

export default client;
