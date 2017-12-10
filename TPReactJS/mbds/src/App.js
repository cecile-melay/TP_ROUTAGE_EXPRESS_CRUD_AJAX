import React, { Component } from 'react';

// Composant fonctionnel
function Hobby(props) {
  const liStyle = {
    backgroundColor: props.index % 2 === 0 ? 'lightpink' : 'red'
  };
    return(
      <li style={liStyle} onClick={() => props.HobbyWasClicked(props.hobbyName)}>
        {props.hobbyName}
      </li>
    )
}

class App extends Component {
  constructor(props) {
    super(props);

    this.loadData();
    
    this.state = {
      hobbies : [],
      pageState : 0,
      selected: 1,
      input: "",
      hobbyWasDeleted: false
    };

    

  }

  loadData() {
    let url = "http://localhost:8080/api/restaurants";  
    //document.getElementById("btnPrevious").disabled = true;      
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      let data = [];
      for (var i=0; i < responseJson.data.length; i++) {
         data.push(responseJson.data[i].name);
      }
      this.setState({
          hobbies:data,
          input : ""
      });
    })
    .catch((error) => {
      console.error(error);
    });      
  }

  addHobby() {
    //alert("addHobby: " + this.state.input);
    const oldHobbies = this.state.hobbies;
    this.setState({
      hobbies: oldHobbies.concat(this.state.input),
      input : ""
    });
  }

  removeHobby(hobby) {
    const oldHobbies = this.state.hobbies;
    const position = oldHobbies.indexOf(hobby);
    this.setState({
      hobbies: oldHobbies.filter(
        (el, index) => {
          return (index !== position)
        }
      ),
      hobbyWasDeleted : true
     } );
  }

  inputChanged(event) {
    let value = event.target.value;
    this.setState({
      input: value
    })
  }

  prevPage() {
    console.log(this.state.pageState);
    //app7.updateButtons();  
    if (this.state.pageState > 1) {             
        this.state.pageState--;
        this.state.selected = this.state.pageState;
        let url = "http://localhost:8080/api/restaurants?page="+this.state.pageState;  
        //document.getElementById("btnPrevious").disabled = true;      
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          let data = [];
          for (var i=0; i < responseJson.data.length; i++) {
             data.push(responseJson.data[i].name);
          }
          this.setState({
              hobbies:data,
              input : ""
          });
        })
        .catch((error) => {
          console.error(error);
        });    
    }
  }

  nextPage() {
    this.state.pageState++;
    let url = "http://localhost:8080/api/restaurants?page="+this.state.pageState;  
    //document.getElementById("btnPrevious").disabled = true;      
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      let data = [];
      for (var i=0; i < responseJson.data.length; i++) {
         data.push(responseJson.data[i].name);
      }
      this.setState({
          hobbies:data,
          input : ""
      });
    })
    .catch((error) => {
      console.error(error);
    });      
  }

  render() {

   // 

    let list = this.state.hobbies.map(
      (el, index) => {
        const liStyle = {
          backgroundColor: index % 2 === 0 ? 'lightpink' : 'red'
        };
        return <li key={el+index} style={liStyle} index={index} onClick={() => this.removeHobby(el)}>{el}</li>
      }
    );

    

    console.log(this.state);

    let listComponents = this.state.hobbies.map(
      (el, index) => {
      
        return <Hobby key={index} 
        index={index} 
        HobbyWasClicked={this.removeHobby.bind(this)}
        hobbyName={el}/>
      }
    );


    let hobbyDeletedParagraph;
    if(this.state.hobbyWasDeleted) {
      hobbyDeletedParagraph = <p>Hobby Deleted !</p>
    }

    const hobbyCounterStyle = {
      color: (this.state.hobbies.length <= 3) ? "green" : "red"
    }

    const hobbyCounterClass = (this.state.hobbies.length > 3) ? "redBorder" : ""
    return (
      <div className="App">
        <h3>My hobbies:</h3>
        <input onChange={this.inputChanged.bind(this)} 
              type="text" 
              value={this.state.input}
              placeholder="new hobby"/>
          <button onClick={this.addHobby.bind(this)}>New Hobby</button>
          {hobbyDeletedParagraph}
          <p style={hobbyCounterStyle} className={hobbyCounterClass}> Hobbies : {this.state.hobbies.length}</p>
          <ul>
            {list}
          </ul>

          
          <p>Avec composant séparé</p>
          <ul>
            {listComponents}
          </ul>
          <button onClick={this.prevPage.bind(this)}>Précédent</button>
          <button onClick={this.nextPage.bind(this)}>Suivant</button>
       </div>
    );
  }
}

export default App;
