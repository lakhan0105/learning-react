export const Person = ({ personData }) => {
  return personData.map((item) => {
    // Destructuring
    const { id, name, age, image } = item;

    return (
      <article className="person" key={id}>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age}</p>
        </div>
      </article>
    );
  });
};
