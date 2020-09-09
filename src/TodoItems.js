import React, { Component } from "react";
import TableContainer from '@material-ui/core/TableContainer';
import Card from '@material-ui/core/Card';
import "./TodoList.css";
import TextField from '@material-ui/core/TextField';
import { Form,  } from "react-bootstrap";
class Countdown extends React.Component {
  state = {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined
  };

  
  componentDidMount() {
      this.interval = setInterval(() => {
        const startDate = new Date();
       
          const { endDate } = this.props;
          const{key}=this.props
          
          const timeRemaining = endDate - startDate.getTime();
      
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
            clearTimeout(this.timer);
          }
        });
  }
  

  componentWillUnmount() {
      if (this.interval) {
          clearInterval(this.interval);
      }
  }
  getTwoDigitValue = value => {
    if (value < 10) {
      return '0' + value;
    }
    return '' + value;
  }
  render() {
      const { days, hours, minutes, seconds } = this.state;

      const convertedDays = this.getTwoDigitValue(days);
    const convertedHours = this.getTwoDigitValue(hours);
    const convertedMins = this.getTwoDigitValue(minutes);
    const convertedSeconds = this.getTwoDigitValue(seconds);
const {itemtext}=this.props;
      if (!seconds) {
          return null;
      }

      return (
        <Card style={{margin:"0.2rem",width:"100%"}}>

<Form>
            <Form.Group >
            <img src={require('../src/assets/user.png')} style={{height:"3rem",width:"3rem",padding:"1%"}} />

            <div
          style={{  
          whiteSpace: "pre-wrap",
          textAlign:'left',
          height: '30%',
          width:'98%',
          marginLeft:'1%',
          fontSize:'1vw',
          fontWeight:'bold'}}
        >{itemtext}</div>
        
        <div className="counter">
          
        <div className="time" style={{marginLeft:"0.4rem"}}>
            <div className="time-value">{convertedDays}</div>
            <div className="time-label">Days</div>
        </div>
        <div className="time">
        <div className="time-value">{convertedHours}</div>
        <div className="time-label">Hours</div>
        </div>
        <div className="time">
            <div className="time-value">{convertedMins}</div>
            <div className="time-label">Minutes</div>
        </div>
        <div className="time">
            <div className="time-value">{convertedSeconds}</div>
            <div className="time-label">Seconds</div>
        </div>
    </div>
    </Form.Group>
          </Form>
          
  </Card>
      );
  }
}
class TodoItems extends Component {
  
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
  createTasks(item) {
   
  return <li 
key={item.key}>
 <Countdown endDate={item.endDate} itemtext={item.text} key={item.key} />

 </li>


  }
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <TableContainer className="tablecontain" >
      <ul className="theList">
          {listItems}
          </ul>
          </TableContainer>

    );
  }
};
 
export default TodoItems;