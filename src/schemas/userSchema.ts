import { Schema, model, connect } from 'mongoose';
import { UserState, TSchema } from '../types/DataState';

type UserSchema = Omit<UserState, 'id'> & TSchema

const userSchema = new Schema<UserSchema>({
    _id: {type: Number, required: true},
    name: { type: String, required: true },
    photo: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    job: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    password: { type: String, required: true }
},
{
    versionKey: false
});

const User = model<UserSchema>('User', userSchema);


//Example of using the model to save on database
/*
const run = async () => {
    await connect('mongodb://127.0.0.1:27017/local');
  
    const user = new User({
        _id: 500,
        name: 'Bill',
        photo: 'https://i.imgur.com/dM7Thhn.png',
        email: 'bill@initech.com',
        phone: "68454672",
        date: "10/05/2024",
        job: "Engineer",
        description: "Fixes bathtubs",
        status: "Available",
        password: "password123"
    });
    await user.save();
  }

run().catch(err => console.log(err));
*/

export { User }