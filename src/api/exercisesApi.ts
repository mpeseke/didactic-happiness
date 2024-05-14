const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;
const API_HOST = import.meta.env.VITE_API_HOST;


export const getAllExercises = async (): Promise<any> => {
    const url = `${API_URL}/exercises?limit=10`;
    const options = {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST
          }
    }

    const response = await fetch(url, options);

    if (!response.ok){
        throw new Error("Network response was not ok")
    }

    const data = await response.json();
    return data;

}

export const getExercisesByBodyPart = () => {

    console.log(API_KEY);
    console.log(API_URL);

}