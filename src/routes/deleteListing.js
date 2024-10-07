import {db} from '../database';

export const deleteListingRoute={
    method: 'DELETE',
    path: '/api/Mylist/{id}',
    handler: async(req, h)=>{
        const {id}=req.params;
        await db.query(
            'DELETE FROM Mylist WHERE id=?',
            [id],
        );
        return { message: 'Deleted!!'};
    }
}
