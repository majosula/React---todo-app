import React from "react";
import '../css/records.css'

class AddRecord extends React.Component {

    

    constructor(props) {
        super(props)
    
        this.state = {
             newRecord : "Add new record",
             allRecords : [
                 {
                     id : 1,
                     list : 'new record 1',
                 },
                 {
                    id : 2,
                    list : 'new record 2',
                },
                {
                    id : 3,
                    list : 'new record 3',
                }
             ] 
        }
    }
    
   listOfRecords = () => {
       return this.state.allRecords.map( allRecords => 
        (
        <li key={allRecords.id}>     
            {allRecords.list}
            <a onClick={() => this.removeRecord(allRecords)}>[delete]</a>
        
        </li>
        ))
   }

    handeCHange = event =>{
        this.setState({
            newRecord : event.target.value
        })
    }

    removeRecord = allRecords =>  {
        this.setState(state => {
            return {
                allRecords: state.allRecords.filter(item => item !== allRecords )
            }
        })
    }

    handleSubmit = event =>{
        event.preventDefault();

        if ( this.state.newRecord){
            this.setState((state) => {
                
                const allRecordsAdd = {
                    id : Math.max(...state.allRecords.map( r => r.id)) +1,
                    list : this.state.newRecord,
                }

                return { 
                    allRecords : [ ...state.allRecords, allRecordsAdd]
            }})
        }

        this.resetForm()

    }

    resetForm = () => {
        this.setState({
            newRecord : ''
        })
    }
   

    render(){

        return(
            <div> 
                
                <ul>
                    {this.listOfRecords()}
                </ul>

               <form onSubmit={this.handleSubmit}>
                    <input 
                        autoFocus
                        value={this.state.newRecord}
                        type="text" 
                        onChange={this.handeCHange} />   
                </form> 

                <p>{this.state.newRecord}</p>
            </div>
        )
    }
}
  
  
  export default AddRecord;