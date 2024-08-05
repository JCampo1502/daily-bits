import { gameAxiosInstance } from "../../../constants";
export const getQuestions = async(category = "")=>{
    try {
        const url = `?category=${category}`;
        const {data:[{questions}]} = await gameAxiosInstance.get(url);
        return questions;
    } catch (error) {
        console.error(error);
        return null;
    }
}