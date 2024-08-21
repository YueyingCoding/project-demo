export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    images: string[];
    categories: Category[];
    reviews: Review[];
    sold: number;
}

interface Category {
    id: number;
    name: string;
}

interface Review {
    id: number;
    title: string;
    content: string;
    rating: number;
    createdAt: Date;
    user: User;
    product: Product;
}

interface User {
    id: number;
    name: string;
    email: string;
}