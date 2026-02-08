import { faker, Faker } from "@faker-js/faker";
export class Randomdatagen{
    static getFirstName()
    {
        return faker.person.firstName();
    }
    static getLastName()
    {
        return faker.person.lastName();
    }
    static getFullName()
    {
        return faker.person.fullName();
    }

    static email()
    {
        return faker.internet.email();
    }
    static phoneNumber()
    {
        return faker.phone.number();
    }
    static password()
    {
        return faker.internet.password();
    }
    
}