import { EKLE, ISARETLE, TEMIZLE } from "../actions";

const INITIAL_STATE = {
    // * Default List Elemanları
    liste: [
        { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
        { id: 2, baslik: "Fatura ode", tamamlandi: true },
        { id: 3, baslik: "Çalış", tamamlandi: false }
    ]
}
export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EKLE:
            return {
                // * aşağıdaki kodda ...state alıyoruz sonra listeyi güncelliyoruz ve sonra tekrar 
                // * listeyi alıyoruz ve yeni bir liste objesi oluşturuyoruz
                ...state, liste: [...state.liste, {
                    // * benzersiz id için her defasında 1 arttır diyoruz
                    id: state.liste.length + 1,
                    baslik: action.payload,
                    tamamlandi: false
                }]
            };

        case ISARETLE:
            return {
                ...state,
                liste: state.liste.map(item => item.id === action.payload ? { ...item, tamamlandi: !item.tamamlandi} : item)
            }
        
        case TEMIZLE:
            return {
                ...state,
                liste:state.liste.filter(item => item.tamamlandi === false)
            }

        default:
            return state;
    }
}