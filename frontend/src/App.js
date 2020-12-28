import './index.css';
import React, { Component } from 'react'
import axios from "axios";
import "tailwindcss/tailwind.css"
import Note from './components/Note'
import Search from './components/Search'
import NoteForm from './components/NoteForm'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: "",

      NoteData: [],
      searchText: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.refreshNotes = this.refreshNotes.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }





  componentDidMount() {
    this.refreshNotes()
  }

  refreshNotes() {
    axios.get('http://127.0.0.1:8000/api/v1/notes/')
      .then(response => {
        const NoteData = response.data;
        this.setState({ NoteData })
      })
  }


  handleSubmit(event) {
    event.preventDefault()
    const new_note = {
      title: this.state.title,
      note: this.state.note
    }


    axios.post('http://127.0.0.1:8000/api/v1/notes/', new_note)
      .then(response => this.refreshNotes())
      .catch(error => console.log(error))

    event.target.reset()

  }


  onDismiss(id) {
    this.state.NoteData.filter(item => item.objectID !== id);
  }

  handleDelete(id) {
    const deleteData = this.state.NoteData.filter(item => id === item.id)
    axios.delete(`http://127.0.0.1:8000/api/v1/notes/${deleteData[0].id}`)
      .then(response => this.refreshNotes())
      .catch(error => console.log(error));
  }



  render() {
    const { NoteData } = this.state;
    return (
      <div className="grid md:container grid-rows-3 md:mx-auto grid-cols-2 gap-4 mt-8">

        <div className="row-span-3">
          <NoteForm className="" onSubmit={this.handleSubmit} onChange={this.handleChange} />

        </div>
        <div className="row-span-1 ">
          <Search onChange={this.handleSearch} />
        </div>
        <div className="row-span-3 border-solid rounded-lg">
          { NoteData.map(item => {
            return (
              <Note key={item.id}
              id={item.id}
                title={item.title} 
                note={item.note} 
                handleDelete={this.handleDelete} />
            )
          })}
        </div>

      </div>
    );
  }

}

export default App;
