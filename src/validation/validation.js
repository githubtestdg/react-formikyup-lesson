import * as Yup from 'yup'

Yup.setLocale({
    mixed:{
        required:'Bu alan doldurulması zorunlu bir alandır',
        oneOf:'Bu alanı işaretlemek zorundasınız.'
    },
    string:{
        min : 'Bu alan minimum ${min} karakter olmalıdır.',
        max: 'Bu alan maksimum ${max} karakter olmalıdır.'
    },
    array:{
        min: 'Yeteneklerden en az ${min} tane seçmeniz gerekmektedir.',
        max: 'Yeteneklerden en az ${max} tane seçmeniz gerekmektedir.',
    }
})

export default Yup
