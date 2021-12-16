export interface Page {
    limit: number;
    pageNumber: number;
}

export interface LoginForm {
    email: string;
    password: string;
}

export interface SignUpForm {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    mobile: string;
}

export interface Legends {
    id: number;
    name: string;
    isChecked: boolean;
}