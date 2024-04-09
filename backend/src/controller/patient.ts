import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express"

const prisma = new PrismaClient();

class Patient {
    async appointment(req: Request, res: Response) {
        const body = req.body;
        try {
            const patient =  await prisma.patients.create({
                data: {
                    email: body.email,
                    firstName: body.firstName,
                    lastName: body.lastName,
                    sex: body.sex,
                    age: parseInt(body.age),
                    appoinmentDate: new Date(body.appointmentDate),
                    message: body.message,
                    userId: body.doctorId
                }
            });
            res.json({
                message: "You've successfully created an appointment"
            })
        } catch(error) {
            res.status(411).json({
                message: "Email is already used"
            })
        }
    }

    async getPatient(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const patient = await prisma.patients.findUnique({
                where: {
                    id: id
                }
            });
            res.json({
                patient
            })
        } catch(error: any) {
            res.status(411).json({
                message: "Patient doesn't found"
            })
        }
    }
}

export default new Patient;