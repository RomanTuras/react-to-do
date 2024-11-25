
const Form = ({addTask}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { text } = form.elements;
    addTask({
      id: Date.now(),
      text: text.value
    });
    form.reset();
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" name="text" />
    <button type="submit">Add</button>
  </form>
}
export default Form;