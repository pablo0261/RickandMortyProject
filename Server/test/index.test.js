const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", ()=>{
    it()
})
describe('GET /rickandmorty/character/:id', ()=>{
    it('Responde con status: 200', async () => {
        await agent.get('/rickandmorty/character/1').expect(200);
    })
    it( 'Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
        const response = await agent.get('/rickandmorty/character/1')
        expect(response.body).tohaveProperty("id")
        expect(response.body).tohaveProperty("name")
        expect(response.body).tohaveProperty("species")
        expect(response.body).tohaveProperty("gender")
        expect(response.body).tohaveProperty("status")
        expect(response.body).tohaveProperty("origin")
        expect(response.body).tohaveProperty("image")
    })
    it( 'Si hay un error responde con status: 500', async () => {
        const response = await agent.get('/rickandmorty/character/5000').expect(response.statusCode).toEqual(500);
    })
})
describe("GET /rickandmorty/login", ()=>{
    it('Debería devolver { access: true } con información de inicio de sesión correcta', async () => {
        const userData = {
            email: 'pablobesler@gmail.com', 
            password: '123', 
            //! RECORDAR MODIFICAR EL TEST CUANDO LA VALIDACION SEA REAL!!
        };

        const response = await agent.get('/rickandmorty/login').query(userData);
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ access: true });
    })
    it('Debería devolver { access: false } con información de inicio de sesión incorrecta', async () => {
        const userData = {
            email: 'henry@gmail.com', 
            password: 'cqwe789', 
        };

        const response = await agent.get('/rickandmorty/login').query(userData);
        expect(response.status).toBe(200); 
        expect(response.body).toEqual({ access: false });
    });
})
describe("POST /rickandmorty/fav", ()=>{
    it("Lo que envíes por body debe ser devuelto en un arreglo", async() => {
        const data = {propiedad: 'Valor'}

        const response = await agent.post("POST /rickandmorty/fav").send(data)
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toContainEqual(data);
    })
    it("Si vuelves a enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente.", async() => {
        const data = {propiedad: 'Valor'}
        const data2 = {propiedad2: 'Valor2'}

        const response = await agent.post("POST /rickandmorty/fav").send(data)
        const response2 = await agent.post("POST /rickandmorty/fav").send(data2)
        
        expect(response.body).toEqual(typeof([data]));
        expect(response2.body).toEqual(typeof([data, data2]));
    })
})
describe("DELETE /rickandmorty/fav/:id", ()=>{
    it('Esta ruta debe devolver un arreglo con los elementos previos sin modificar en el caso de que no haya ningún personaje con el ID que se envió', async () =>{
        const characters = [{id:1, name: 'Char1'}, {id:2, name: 'Char2'}]
        const didToDelete = 3

        const response = await agent.delete("DELETE /rickandmorty/fav/:id").send(data)

        expect(response.body).toEqual(characters);
    })
    it('Cuando envías un ID válido se elimine correctamente al personaje', async () =>{
        const data = [{id:1, name: 'Char1'}, {id:2, name: 'Char2'}]
        const didToDelete = 1

        const response = await agent.delete("DELETE /rickandmorty/fav/:id")

        const verification = data.filter((charcater)=> character.id !== data)

        expect(response.body).toEqual(verification)
    })
})
