import axios from "axios";

export const SearchContent = async() => {
    const province = await axios.get(`https://api-pesantren-indonesia.vercel.app/provinsi.json`);
    return province.data;
}

export const KabupatenApi = async(parameters) =>{
    const kabData = await axios.get(`https://api-pesantren-indonesia.vercel.app/kabupaten/${parameters}.json`);
    return kabData.data;
  }

export const ContentList = async(parameterscontent) =>{
    const content = await axios.get(`https://api-pesantren-indonesia.vercel.app/pesantren/${parameterscontent}.json`);
    return content.data;
  }

