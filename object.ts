const sinhvien: { name: string, grade: number, hometown: string, printInfo: () => string } = {
    name: "Đăng Tuấn",
    grade: 5,
    hometown: "Hà Nội",
    printInfo: function () {
        return `Sinh viên ${this.name} quê quán: ${this.hometown}`
    }
}

const sinhvien2: { name: string, grade: number, hometown: string, printInfo: () => string } = {
    name: "Anh Dũng",
    grade: 5,
    hometown: "Bắc Giang",
    printInfo: function () {
        return "";
    }
}


// const book: {authors: {id: number, name: string, slug: string}[], book_cover?: string, categories: {id: number, name: string, is_leaf: boolean}}

interface Book {
    authors: Author[],
    book_cover?: string,
    categories: { id: number, name: string, is_leaf: boolean },
    current_seller: Current[],
    description: string,
    images: Images[],
    list_price: number,
    name: string,
    original_price: number
    quantity_sold: {
        text: string,
        value: number
    }
    rating_average: number,
    short_description: string
    specifications: Specifications[],
    id: number
}

interface Author {
    id: number,
    name: string,
    slug: string
}

interface Current {
    id: number,
    name: string,
    sku: number,
    link: string,
    logo: string,
    price: number,
    product_id: number,
    store_id: number,
    is_best_store: boolean,
    is_offline_installment_supported?: string,
}
interface Images {
    base_url: string,
    is_gallery: boolean
    label?: string
    large_url: string
    medium_url: string
    position?: string
    small_url: string
    thumbnail_url: string
}
interface Specifications {
    name: string,
    attributes: Attributes[],
}
interface Attributes {
    code: string,
    name: string
    value: string
}
// Differences type aliases / interface

// interface User {
//     username: string,
//     password: string,
//     email: string
// }

enum LEVEL { STAFF, MANAGER }

// interface Admin extends User {
//     is_admin: boolean,
//     level: LEVEL.MANAGER | LEVEL.STAFF
// }

// Properties
interface User {
    username: string,
    password: string,
    email: string
}
// Method
interface User {
    login: () => void,
    logout: () => void
}
// lỗi nếu dùng type
// type User =  {
//     username: string,
//     password: string,
//     email: string
// }
// // Method
// type User =  {
//     login: () => void,
//     logout: () => void
// }

type Admin = User & {
    is_admin: boolean,
    level: LEVEL.MANAGER | LEVEL.STAFF
}