function Filter({result, handleResult}) {
  return (
    <>
      <h2>Phonebook</h2>
      filter shown with: <input value={result} onChange={handleResult}/>
    </>
  )
};

export default Filter;

