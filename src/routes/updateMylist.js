import {db} from '../database';


export const updateMylistRoute={
    method:'POST',
    path: '/api/Mylist/{id}',
    handler: async(req, h)=>{
        const { id }=req.params;
        const { name, quantity, price} =req.payload;
        const userId='12345';
        await db.query(`
            
            UPDATE Mylist
            SET name=? ,quantity=? ,price=?
            WHERE id=? AND user_id=?
            `, [name,quantity,price,id, userId]);
            const {results}= await db.query(
                'SELECT * FROM Mylist WHERE id=? AND user_id=?',
                [id,userId],

            );
            return results[0];
    }
}