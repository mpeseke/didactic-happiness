import { BodyPart, Exercise } from "../models/models";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;
const API_HOST = import.meta.env.VITE_API_HOST;

const getOptions = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST
    }
}


export const getBodyParts = async (): Promise<string[]> => {
    const url=`${API_URL}/exercises/bodyPartList`
    const response = await fetch(url, getOptions);

    if (!response.ok) {
        throw new Error("Network response was not ok")
    }

    const data = await response.json();
    return data;
}

export const getAllExercises = async (): Promise<Exercise[]> => {
    const url = `${API_URL}/exercises?limit=10`;

    const response = await fetch(url, getOptions);

    if (!response.ok){
        throw new Error("Network response was not ok")
    }

    const data = await response.json();
    return data;

}

export const getExercisesByBodyPart = () => {

}