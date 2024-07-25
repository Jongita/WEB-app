import { pool } from "../db/connect";
import { Meal } from "../models/meal";


export class MealController{
    static async getAll(req:any, res:any){
        if (req.user.type>2){
            return res.status(400).json({
                text:"Neturite teisiu"
            })
        }
        const sql="SELECT * FROM meal";
        const [result]=await pool.query<Meal[]>(sql);
        res.json(result);
    }

    // static async filterProducts( req:any, res:any){
    //     if (req.user.type>2){
    //         return res.status(400).json({
    //             text:"Neturite teisiu"
    //         })
    //     }
    //     const sql="SELECT * FROM products WHERE name like ?";
    //     const [result]=await pool.query<Product[]>(sql, ["%"+req.params.filter+"%"]);
    //     res.json(result);
    // }
    

    static async getMeal( req:any, res:any){
        console.log(req.params.id);
        const sql="SELECT * FROM meal WHERE id=?";
        const [result]=await pool.query<Meal[]>(sql, [req.params.id]);
        if (result.length==0){
            res.status(404).json({
                'text': 'Pateiktas irasas nerastas'
            })
        } else{
            res.json(result[0]);
        }
       
    }
     static async insert(req:any, res:any){

        if (isNaN(req.body.price)){
            return res.status(400).json({
                'text':'Kaina privalo būti skaičius'
            });
        }

        const sql="INSERT INTO meal (name, description, price, image) VALUES ( ?, ?, ?, ? )";
        await pool.query(sql, [req.body.name, req.body.description, req.body.price, req.body.image]);
        res.status(201).json({
            "success":true
        })
    }

    static async update(req:any, res:any){
        const sql="UPDATE products SET name=?, price=? WHERE id=?";

        if (isNaN(req.body.price)){
            return res.status(400).json({
                'text':'Kaina privalo būti skaičius'
            });
        }

        try{
            await pool.query(sql, [req.body.name, req.body.price, req.body.id]);
        
            res.json({
                "success":true
            });
        }catch(error){
            res.status(500).json({
                'text':'Įvyko atnaujinimo klaida'
            });
        }
        
    }

    static async delete(req:any, res:any){
        const sql="DELETE FROM products WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }
}