import  Boom  from "@hapi/boom";
import { db } from '../database';

export const getListingRoute={
    method: 'GET',
    path: '/api/Mylist/{id}',
    handler: async(req, h) =>{ 
        const id = req.params.id;
      
        const { results } = await db.query(
            'SELECT * FROM Mylist WHERE id=?',
            [id],
        );

        const Mylist = results[0];
        if (!Mylist) throw Boom.notFound(`List does not exist with id ${id}`);
        return Mylist;
    }
}