import express, {Request, Response} from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    return res.status(200).send({
        response: "Express Typescript",
    });
});

app.listen(3000, () => {
    console.log("port 3000")
})