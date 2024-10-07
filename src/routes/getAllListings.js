
import { db } from '../database';

export const getAllListingsRoute = {
    method: 'GET',
    path: '/api/Mylist',
    handler: async(req, h) => {
        const { results } = await db.query(
            'SELECT * FROM Mylist'
        );
        return results;
    }
}