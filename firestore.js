//const db = app.firestore()
const estudiante = {
    nombre:"Juan Jose",
    apellido:"Arias",
    actvo: true
}
const estudiantesCollection = db.collection('estudiantes')
estudiantesCollection

.add(estudiante)
.then(Reference => {

    console.log(Reference.id)

}).catch(e => {
    console.log(e)
})
/*estudiantesCollection
    .doc('I2i8gk59mbyVnC0IbcEu')
    .update(
        {
            nombre: 'Fulanito',
        }
    )*/
    /*estudiantesCollection
    .doc('I2i8gk59mbyVnC0IbcEu')
    .set(
        {
            nombre: 'Fulanito',
            edad: 25
        }
    )*/
    /*estudiantesCollection
    .doc('I2i8gk59mbyVnC0IbcEu')
    .delete()*/

    estudiantesCollection
    .onSnapshot(snap => {
        console.log(snap)
    })