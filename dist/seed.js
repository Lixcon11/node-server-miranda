"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const faker_1 = require("@faker-js/faker");
const userSchema_1 = require("./models/userSchema");
const roomSchema_1 = require("./models/roomSchema");
const bookingSchema_1 = require("./models/bookingSchema");
const contactSchema_1 = require("./models/contactSchema");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI environment variable is not defined');
    }
    yield mongoose_1.default.connect(process.env.MONGO_URI)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
    for (let i = 0; i < 10; i++) {
        const user = new userSchema_1.User({
            _id: yield generateNewId(userSchema_1.User),
            name: faker_1.faker.person.fullName(),
            photo: faker_1.faker.image.avatar(),
            email: faker_1.faker.internet.email(),
            phone: faker_1.faker.phone.number(),
            date: faker_1.faker.date.past().toISOString(),
            job: faker_1.faker.person.jobTitle(),
            description: faker_1.faker.lorem.sentence(),
            status: faker_1.faker.helpers.arrayElement(["Active", "Inactive"]),
            password: yield bcryptjs_1.default.hash(faker_1.faker.internet.password(), 10)
        });
        user.save();
        const room = new roomSchema_1.Room({
            _id: yield generateNewId(roomSchema_1.Room),
            roomNumber: "Room " + faker_1.faker.number.int({ min: 1, max: 765 }),
            description: faker_1.faker.lorem.sentence(),
            photos: [faker_1.faker.image.avatar(), faker_1.faker.image.avatar()],
            roomType: faker_1.faker.helpers.arrayElement(["Single Bed", "Double Bed", "Double Superior", "Suite"]),
            amenities: faker_1.faker.helpers.arrayElements(["AC", "Breakfast", "Cleaning", "Grocery", "Shop Near", "Wifi", "Kitchen", "Shower", "Single Bed", "Towels"], 3),
            price: faker_1.faker.number.int({ min: 300, max: 1000 }),
            discount: faker_1.faker.number.int({ min: 0, max: 75 }),
            status: faker_1.faker.helpers.arrayElement(["Available", "Booked"])
        });
        room.save();
        const booking = new bookingSchema_1.Booking({
            _id: yield generateNewId(bookingSchema_1.Booking),
            name: faker_1.faker.person.fullName(),
            orderDate: faker_1.faker.date.past().toISOString(),
            checkInDate: faker_1.faker.date.future().toISOString(),
            checkOutDate: faker_1.faker.date.future().toISOString(),
            specialRequest: faker_1.faker.lorem.sentence(),
            room: room,
            status: faker_1.faker.helpers.arrayElement(["Check In", "Check Out", "In Progress"])
        });
        booking.save();
        const contact = new contactSchema_1.Contact({
            _id: yield generateNewId(contactSchema_1.Contact),
            name: faker_1.faker.person.fullName(),
            date: faker_1.faker.date.past().toISOString(),
            email: faker_1.faker.internet.email(),
            phone: faker_1.faker.phone.number(),
            subject: faker_1.faker.lorem.words(),
            comment: faker_1.faker.lorem.sentences(),
            status: faker_1.faker.helpers.arrayElement(["Published", "Archived"])
        });
        contact.save();
    }
    console.log('Fake data inserted');
    //await mongoose.connection.close();
});
const generateNewId = (model) => __awaiter(void 0, void 0, void 0, function* () {
    const usedIds = yield model.find({}, '_id').exec();
    const usedIdSet = new Set(usedIds.map(doc => doc._id));
    let newId = 1;
    while (usedIdSet.has(newId)) {
        newId++;
    }
    return newId;
});
seed().catch(err => console.error(err));
