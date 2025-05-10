export const conectarBackend = async () => {
    const respuesta = await fetch('http://localhost:8000/api')
    const data = respuesta.json()
    return data
}