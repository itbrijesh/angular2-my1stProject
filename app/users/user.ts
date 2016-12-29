
export class User {
    id: string;
    name: string;
    email: string;
    phone: string;
    address = new Address();
}

export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

