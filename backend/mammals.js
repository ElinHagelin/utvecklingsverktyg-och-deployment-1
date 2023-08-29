import express from "express"
import { getDb } from "./database.js"
import { getRandomAnimal } from "./utils.js"

const router = express.Router()
const db = getDb()

router.get("/", async (req, res) => {
	await db.read()
	res.send(db.data.mammals)
})

router.get("/random", async (req, res) => {
	console.log('Felsöker GET /random 1');
	await db.read()
	let random = getRandomAnimal(db.data.mammals)
	console.log('Felsöker GET /random 2, random är: ' + random);
	res.send(random)
})

router.post("/", async (req, res) => {
	await db.read()
	console.log('Felsöker POST, innan if-sats');
	let maybeMammal = req.body.animal

	if (req.body && maybeMammal != '') {
		console.log('Felsöker POST, strängen är inte tom');
		db.data.mammals.push(maybeMammal)
		await db.write()
		res.send(maybeMammal)
	} else {
		console.log('Felsöker POST, strängen är tom');
		res.sendStatus(400)
	}
})

export default router