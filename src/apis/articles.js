import axios from 'axios';

const apiKeys = [
    "f251266458e947ba94e465c731e10a2a",
    "afbacd1a0f8a435e8971084223998783"
]

const client = axios.create({
    baseURL: "https://newsapi.org/v2"
})

client.interceptors.request.use((request) => {
    const apiKeyIndex = Math.floor((Math.random() * apiKeys.length));
    const apiKey = apiKeys[apiKeyIndex];

    request.headers.Authorization = `Bearer ${apiKey}`;

    return request;
});

export default client;