import react, { Component } from "react";
import style from "./Form.module.css";

class Form extends Component {
  state = {
    // contacts: [
    //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    //   ],
    name: "",
    number: "",
  };

  handleNameInputChange = (evt) => {
    this.setState({ name: evt.target.value });

    console.log(this.state);
  };

  handleNumberInputChange = (evt) => {
    this.setState({ number: evt.target.value });
    console.log(this.state);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={style.saving_lable}>
          Name{" "}
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleNameInputChange}
          />
        </label>
        <label className={style.saving_lable}>
          Number
          <input
            type="number"
            name="number"
            value={number}
            required
            onChange={this.handleNumberInputChange}
          />
        </label>
        <button className={style.saving_btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
