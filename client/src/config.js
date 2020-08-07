export const imageUrl = 
    process.env.REACT_APP_IMAGE_URL ||
    process.env.NODE_ENV === "production"
        ? "https://river-runners.herokuapp.com"
        : "http://localhost:8080";

export const baseUrl = process.env.REACT_APP_BASEURL || `${imageUrl}/api`;