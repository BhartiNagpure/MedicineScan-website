import { NextResponse } from 'next/server';
import medicine from '@/models/medicinemodel';
import {connect} from '@/dbConfig/dbConfig';

connect()

export async function GET(request) {
    const { searchParams } = new URL(request.url);
        const name = searchParams.get('name');

        console.log("name for backend url",name)

        if (!name) {
            return NextResponse.json({ error: 'Medicine name is required' }, { status: 400 });
        }

    try {       
            // const medicineData = await medicine.findOne({ 
            //     name: { $regex: new RegExp('^' + name + '$', 'i') } 
            // });
            const medicineData = await medicine.findOne({ 
                name: { $regex: new RegExp(name, 'i') } 
            });
    
            if (!medicineData) {
                return NextResponse.json(
                    { error: 'Medicine not found' },
                    { status: 404 }
                );
            }
    
            return NextResponse.json(medicineData);
        
    } catch (error) {
         console.error('Error fetching medicine:', error);
                return NextResponse.json(
                    { error: 'Failed to fetch medicine data' },
                    { status: 500 }
                );
       
    }
}