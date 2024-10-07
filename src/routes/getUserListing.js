import{db} from '../database';

export const getUserListingRoute= {
    method: 'GET',
    path: '/api/users/{userId}/Mylist',
    handler: async (req, h)=> {
        const userId= req.params.userId;

        const { results }= await db.query(
            'SELECT * FROM Mylist WHERE user_id=?',
            [userId],
        );

        return results;
    }
}