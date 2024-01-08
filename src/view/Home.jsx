
export const Home = () => {
  const imageStyles = {
    maxWidth: '700px', // Establece el ancho máximo de la imagen en 700px
    display: 'block', // Hace que la imagen se muestre como bloque
    margin: '0 auto' // Centra la imagen horizontalmente
  };
  return (
    <div>
      <h1>¡Bienvenidos a Happy Cake!</h1>
      <h2>El lugar de los pasteles felices.</h2>
      <div style={{ textAlign: 'center' }}>
      <img src="https://cdn.publish0x.com/prod/fs/cachedimages/822724795-8dc1900eec332045fa28fc97f9a52ff2b6f7c5bef6fa0f083cbcae713c523ea9.png" alt="Torta" style={imageStyles} />
    </div>
    </div>

  )
}
