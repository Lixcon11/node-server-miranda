import request from 'supertest';
import { app } from '../app';

describe('Hotel API', () => {
  let token: string;

  beforeAll(async () => {
      const response = await request(app).post('/login').send({ email: 'hi@mark.com', password: 'youaretearingapartlisa' });
      
      expect(response.status).toBe(200);
      token = response.body.token;
      expect(token).toBeDefined();
  });

  it('Should return 401 for unauthenticated request to /rooms', async () => {
      const response = await request(app).get('/rooms');
      expect(response.status).toBe(401);
  });

  it('Should return 200 and list of rooms for authenticated request to /rooms', async () => {
      const response = await request(app).get('/rooms').set('Authorization', `Bearer ${token}`);
      
      expect(response.status).toBe(200);
      expect(response.body.rooms).toBeDefined();
  });

  it('Should return 200 and room details for authenticated request to /rooms/:id', async () => {
      const roomId = 1;
      const response = await request(app).get(`/rooms/${roomId}`).set('Authorization', `Bearer ${token}`);
      
      expect(response.status).toBe(200);
      expect(response.body.room).toBeDefined();
      expect(response.body.room.id).toBe(roomId);
  });
});