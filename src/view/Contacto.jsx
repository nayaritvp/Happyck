export const Contacto = () => {
  return (
    <div>
      <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Correo</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripción</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </div>
  )
}

