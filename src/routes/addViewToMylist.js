import {db} from '../database';


export const addViewToMylistRoute={
    method: 'POST',
    path: '/api/Mylist/{id}/add-view',
    handler: async(req, h)=> {
        const id = req.params.id;
        await db.query(
            'UPDATE Mylist SET views=views+1 WHERE id=?',
            [id],
        );

        const {results}= await db.query(
            'SELECT * FROM Mylist WHERE id=?',
            [id],
        );
        const updatedListing= results[0];
        return updatedListing;
    }
}