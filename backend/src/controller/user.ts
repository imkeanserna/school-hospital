import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class User {
    async signin(req: Request, res: Response) {
        const body = req.body;

        try {
            const isExist = await prisma.doctor.findUnique({
                where: {
                    email: body.email,
                    password: body.password
                },
                select: {
                    id: true,
                    email: true,
                    firstName: true,
                    lastName: true,
                    specialists: true,
                    created: true,
                    description: true
                }
            })
            if(!isExist) {throw Error};
            
            res.json({
                isExist,
                message: "You've successfully login to your account"
            })
        } catch (error: any) {
            
            res.status(411).json({
                message: "Email / Password is incorrect"
            })
        }
    }

    async register(req: Request, res: Response) {
        const body = req.body;

        try {
            const user = await prisma.doctor.create({
                data: {
                    email: body.email,
                    password: body.password,
                    firstName: body.firstName,
                    lastName: body.lastName,
                    specialists: body.specialists,
                    description: body.description
                },
                select: {
                    id: true,
                    email: true,
                    firstName: true,
                    lastName: true,
                    specialists: true,
                    created: true,
                    description: true
                }
            })

            res.json({
                user,
                message: "You've successfully created an account"
            })
        } catch (error) {
            res.status(411).json({
                message: "Email is already used"
            })
        }
    }

    async getUsers(req: Request, res: Response) {
        try {
            const users = await prisma.doctor.findMany({});

            if (!users) {
                res.status(404).json({
                    message: "No doctors"
                })
            }
            res.json({
                users
            })
        } catch (error: any) {
            res.status(505).json({
                message: "Something went wrong"
            })
        }
    }

    async getUser(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const user = await prisma.doctor.findUnique({
                where: {
                    id: id
                }
            });
            res.json({
                user
            })
        } catch (error: any) {
            res.status(404).json({
                message: "The doctors is not found"
            })
        }
    }

    async getAppointments(req: Request, res: Response) {
        const id = req.headers["authorization"];
        const patients = await prisma.patients.findMany({
            where: {
                userId: id
            }
        });
        res.json({
            patients
        })
    }
}

export default new User;