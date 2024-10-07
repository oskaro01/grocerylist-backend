import { v4 as uuid } from 'uuid';
import { db } from '../database';

export const createNewListingRoute ={
    method: 'POST',
    path: '/api/Mylist',
    handler: async(req, h)=>{
        const id = uuid();
        const { name ='', quantity='', price=0 } = req.payload;
        const userId='12345';
        const views =0;
        
        await db.query(`
            INSERT INTO Mylist (id, name, quantity, price, user_id, views)
            VALUES (?, ?, ?, ?, ?, ?);
            
        `,
             [id, name, quantity, price, userId, views]
    
        );


       return { id, name, quantity, price, user_id: userId, views};

    }
}