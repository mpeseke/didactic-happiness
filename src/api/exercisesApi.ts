import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;


export const getAllExercises = async (): Promise<any> => {
    const options = {
        method: "GET",
        url: `${API_URL}/exercises`,
        params: {limit: '10'},
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_URL
        }
    };


   try{
    const response = await axios.request(options);
    const {data} = response;
    console.log(data)
    return data;
   } catch(error) {
        console.log(error)
    }
}

export const getExercisesByBodyPart = () => {

    console.log(API_KEY);
    console.log(API_URL);

}