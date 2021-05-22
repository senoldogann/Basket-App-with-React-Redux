export const EKLE = "EKLE";
export const TEMIZLE = "TEMIZLE";
export const ISARETLE = "ISARETLE";


export const eklemeIslemi = (text) => {return {type:EKLE,payload:text}}
export const ısaretlemeIslemi = (id) => {return {type:ISARETLE,payload:id}}
export const temizlemeIslemi = () => {return {type:TEMIZLE}}