import axios from "axios";

const baseURL = "https://language-translation-nl1t.onrender.com"

// ?to=es&from=en

export const translate = async (text: string, to?: string, from?: string) => {
    let url = `${baseURL}/translate`;

    if (to) {
        url += `?to=${to}`;
    }

    if (from) {
        url += `&from=${from}`;
    }

    const { data } = await axios.post(url, {
        message: text
    });
    return data;
};