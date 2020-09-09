import React from "react";
import { Form } from "react-bootstrap";
import  "./styles.css";
import TodoItems from "./TodoItems";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import "./TodoList.css";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  box:{
    height: '30%',
    fontSize:'1vw',
    marginLeft:'1%',
    marginRight:'1%',
    textAlign:'left',
    fontWeight:'bold',
    color:'#000000'
  },
  box1:{
    height: '30%',
    padding:'1%',
    fontSize:'1vw',
    textAlign:'right',
    fontWeight:'bold',
    color:'#000000'
  },
  button: {
    margin: theme.spacing.unit,
    
    height: '30%',
    padding:'1%',
    fontSize:'2vw',
    textAlign:'right',
    fontWeight:'bold',
  },
  rightIcon:{
  
    padding:'1%',
    fontSize:'2vw',
    textAlign:'center',
    marginRight:'1%',
    fontWeight:'bold',
  },
  paper:{
     width:'100%',
     height:'95%',
  },
  grid:{
    width:'100%',
    height:'50%',
 },
   paper1:{
    marginLeft: '0.5%',
    fontWeight:'bold',
  },
  textField: {
    textAlign:'right',
    height: '30%',
    width:'90%',
    marginLeft:'2%',
    marginTop:'0%',
    fontSize:'2vw',
    fontWeight:'bold',
  },
});
 class Timer extends React.Component {
     
  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }
    constructor(props) {
        super(props);
        this.state = {
            items: []
          };
         
        this.addItem = this.addItem.bind(this);
        
        this.deleteItem = this.deleteItem.bind(this);
      }
      state = {
        endDate: new Date(),
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        errorMsg: ''
      };
    
    
      onEndDateChange = endDate => {
        this.setState({ endDate });
        const startDate = new Date();
        const timeRemaining = endDate.getTime() - startDate.getTime();
        if(timeRemaining<=0){
            this.setState({ errorMsg: 'Please select future date & time'});
            clearTimeout(this.timer);
        }
      }
    
      getTwoDigitValue = value => {
        if (value < 10) {
          return '0' + value;
        }
        return '' + value;
      }
      
      calculateCountdown = () => {
        const startDate = new Date();
        const { endDate } = this.state;
        
        
        const timeRemaining = endDate.getTime() - startDate.getTime();
    
        if(timeRemaining > 0) {
          const start_date = new Date(startDate);
          const end_date = new Date(endDate);
          const start_millis = start_date.getTime(); // Get timestamp of start date
          const end_millis = end_date.getTime(); // Get timestamp of end date
    
          // Convert to seconds, 1 second = 1000 milli seconds
          const old_sec = start_millis / 1000;
          const current_sec = end_millis / 1000;
    
          // Get remaining seconds
          let seconds = current_sec - old_sec;
    
          let days = Math.floor(seconds / (24 * 60 * 60)); // 1 day is equal to 24 hours, each hour has 60 mins and 60 seconds
          seconds -= days * 24 * 60 * 60; // Get remaining seconds
    
          let hours = Math.floor(seconds / (60 * 60)); // 1 hour has 60 mins and 60 seconds
          seconds -= hours * 60 * 60; // Get remaining seconds
    
          let minutes = Math.floor(seconds / 60); // 1 minute is equal to 60 seconds
          seconds -= minutes * 60; // Get remaining seconds
    
          days    = Math.abs(days);
          hours   = Math.abs(hours);
          minutes = Math.abs(minutes);
          seconds = Math.floor(Math.abs(seconds));
    
          this.setState(() => ({
            days, hours, minutes, seconds
          }), () => {
            this.timer = setTimeout(this.calculateCountdown, 1000);
          });
        } else {
          this.setState({ errorMsg: 'Please select future date & time'});
          clearTimeout(this.timer);
        }
      };
    
    
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }
  addItem(e) { 
    const startDate = new Date();
    const { endDate } = this.state;
    console.log(startDate);
    this.setState({ errorMsg: '' });
    
    const timeRemaining = endDate.getTime() - startDate.getTime();

    if(timeRemaining > 0) {
        const start_date = new Date(startDate);
        const end_date = new Date(endDate);
        const start_millis = start_date.getTime(); // Get timestamp of start date
        const end_millis = end_date.getTime(); // Get timestamp of end date
   // Convert to seconds, 1 second = 1000 milli seconds
   const old_sec = start_millis / 1000;
   const current_sec = end_millis / 1000;

   // Get remaining seconds
   let seconds = current_sec - old_sec;

   let days = Math.floor(seconds / (24 * 60 * 60)); // 1 day is equal to 24 hours, each hour has 60 mins and 60 seconds
   seconds -= days * 24 * 60 * 60; // Get remaining seconds

   let hours = Math.floor(seconds / (60 * 60)); // 1 hour has 60 mins and 60 seconds
   seconds -= hours * 60 * 60; // Get remaining seconds

   let minutes = Math.floor(seconds / 60); // 1 minute is equal to 60 seconds
   seconds -= minutes * 60; // Get remaining seconds

   days    = Math.abs(days);
   hours   = Math.abs(hours);
   minutes = Math.abs(minutes);
   seconds = Math.floor(Math.abs(seconds));

  
      if (this.textRef.value !== "") {
        var newItem = {
          text: this.textRef.value,
          endDate:(endDate.getTime()),
          key: Date.now()
        };
     
        this.setState((prevState) => {
          return { 
            items: prevState.items.concat(newItem) 
          };
        });
       
        this.textRef.value = "";

      }
       
      console.log(this.state.items);
         
      e.preventDefault();
      localStorage.setItem("list", JSON.stringify(newItem));
      localStorage.setItem("newItem", "");
    }
}
        

handleChange = event => {
  this.setState({ filter: event.target.value });
};


  render() {
    const {  errorMsg } = this.state;
 
    const { classes } = this.props;
    return (
        <Card className={classes.paper1}style={{height:"100%",width:"97%"}}>
     <div class="row">
  <div style={{width:"7%",height:"50rem"}}>
    <div  style={{width:"60%",height:"50rem"}}>
      <p><img src={require('../src/assets/twitter.png')} style={{height:"2.5rem",width:"2.5rem",marginLeft:"40%",marginRight:"1%",marginTop:"10%"}} /></p>
      <p><img src={require('../src/assets/home.png')} style={{height:"3rem",width:"3rem",marginLeft:"40%",marginRight:"1%",marginTop:"20%"}} /></p>
      <p><img src={require('../src/assets/discover.png')} style={{height:"3rem",width:"3rem",marginLeft:"40%",marginRight:"1%",marginTop:"20%"}} /></p>
      <p><img src={require('../src/assets/bell.png')} style={{height:"3rem",width:"3rem",marginLeft:"40%",marginRight:"1%",marginTop:"20%"}} /></p>
<p><img src={require('../src/assets/envelop.png')} style={{height:"2rem",width:"3rem",marginLeft:"40%",marginRight:"1%",marginTop:"20%"}} /></p>
      <p><img src={require('../src/assets/book.png')} style={{height:"3rem",width:"3rem",marginLeft:"40%",marginRight:"1%",marginTop:"30%"}} /></p>
      <p><img src={require('../src/assets/share.png')} style={{height:"4rem",width:"4rem",marginLeft:"40%",marginRight:"1%",marginTop:"20%"}} /></p>
</div>
  </div>

  <div style={{width:"60%",height:"50rem"}}>
    <div style={{width:"100%",height:"50rem",backgroundColor:"#EBEDF3"}}>
    <Card style={{padding:"0.5%"}}>
  <h3 style={{fontWeight:"bold"}}>Home</h3>
  </Card>
    <Card className={classes.grid} style={{height:"10rem", marginTop:"0.5%"}}>
        <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
          <div className={classes.box}>
      <img src={require('../src/assets/user.png')} style={{height:"3.5rem",width:"3.5rem",padding:"0.5%"}} />
      
          <TextField inputRef={element => (this.textRef = element)} 
           multiline
           padding="2%"
           style={{fontSize:"3rem",border: 'none',marginTop:"1%"}}
         
           className={classes.textField}
           placeholder="What's happenning?"
           rows="3"/>
           <br styles="clear:both" />     
           </div>
           <div className={classes.box1}> 
      
           <div>
        <div className="date-time-form">
          {errorMsg && <p className="error-msg">{errorMsg}</p>}
           
          <Form>
            <Form.Group controlId="end_date">
              <Form.Label>Set disappearing Date & Time:</Form.Label>
              <KeyboardDateTimePicker
              ampm={false}
              disablePast
                format="dd/MM/y h:mm:ss a"
                onChange={this.onEndDateChange}
                value={this.state.endDate}
                showTodayButton={true}
                clearable={true}
                InputProps={{
                    disableUnderline: true,
                   }}
              />
              
            <button type="submit"
       variant="primary" 
       onClick={this.calculateCountdown} 
       style={{background:"#2a9df4",fontSize:"1rem",
       height:"15%",width:"10%",
       marginLeft:"0.5rem",
       borderColor:"#2a9df4",
       padding:"0.5%",
       borderRadius:"1.5rem" ,
       color:"#FFFFFF",fontWeight:"bold" }}>Tweet</button>
            </Form.Group>
          </Form>
        </div>
      </div>
      </div>
          </form>
        </div>
      </div>
      </Card>
      <Card className={classes.grid} style={{height:"40rem",marginTop:"1%"}}>
<TodoItems entries={this.state.items}
 delete={this.deleteItem}/>
</Card>
  
    </div>
  </div>
  <div style={{width:"30%",height:"56rem"}}>
    <div class="card" style={{width:"98%",height:"56rem"}}>
    <Card
          value= "Search?"
          margin="normal"
          style={{  
          textAlign:'center',
          height: '3rem',
          color: '#000000',
          backgroundColor:"#EBEDF3",
          marginTop:'2%',
          marginBottom:'2%',
          marginLeft:"4%",
          marginRight:"4%",
          borderRadius:"4rem",
          fontSize:'1vw',
          padding:"2%"}}
        >Search Twitter</Card>
        <Card
          style={{  
          textAlign:'center',
          height: '100%',
          backgroundColor:"#EBEDF3",
          color: '#000000',
          marginTop:"1%",
          borderRadius:"1rem",
          marginLeft:"5%",
          marginRight:"5%",
          padding:"1%",
          fontSize:'2vw',
          fontWeight:'bold'}}
        >  What's happening?
        
  <hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .2,
    borderColor : '#D3D3D3'
}}/></Card>
     </div>
  </div>
</div>
    </Card>
  
    );
  }
}

export default withStyles(styles)(Timer);