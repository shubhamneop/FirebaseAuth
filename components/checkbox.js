import React , {Component} from 'react';
import {CheckBox, View,StyleSheet, Text,TouchableOpacity, ScrollView, Alert} from 'react-native';
import {Badge} from 'react-native-elements';

class CheckBoxs extends Component {
    constructor() {
        super();
        this.state={
            name: [
                {'name': 'Ben', 'id': 1, 'checked': false, 'value': 0},
                {'name': 'Susan', 'id': 2,'checked': false, 'value': 0},
                {'name': 'Robert', 'id': 3,'checked': false, 'value': 0},
                {'name': 'Mary', 'id': 4,'checked': false, 'value': 0},
                {'name': 'Daniel', 'id': 5,'checked': false, 'value': 0},
                {'name': 'Laura', 'id': 6,'checked': false, 'value': 0},
                {'name': 'John', 'id': 7,'checked': false, 'value': 0},
                {'name': 'Debra', 'id': 8,'checked': false, 'value': 0},
                {'name': 'Aron', 'id': 9,'checked': false, 'value': 0},
                {'name': 'Ann', 'id': 10,'checked': false, 'value': 0},
                {'name': 'Steve', 'id': 11,'checked': false, 'value': 0},
                {'name': 'Olivia', 'id': 12,'checked': false, 'value': 0}
            ],
        
            }
    }

    checkHandler = (checkId) => {
        const name = this.state.name;
        const index = name.findIndex(x => x.id === checkId);
        name[index].checked = !name[index].checked;
        this.setState(name);
    }

    increament = (id) => {
        const name = this.state.name;
        const index = name.findIndex(x => x.id === id);
        name[index].value = name[index].value + 1;
        this.setState(name);
    }

    decreament = (id) => {
        const name = this.state.name;
        const index = name.findIndex(x => x.id === id);
        if(name[index].value > 0) {
            name[index].value = name[index].value - 1;
            this.setState(name);
        }
    }

    onSubmit = () => {
        const name = this.state.name.filter(x => x.checked);
        console.log(name);
    }

    render(){
    return (
        <ScrollView>
        <View style={styles.container}>
            {this.state.name.map((item,index) => (
                <View style={styles.item} key={item.id} >
                <CheckBox checked={item.checked} value={item.checked} color="#fc5185" onValueChange={()=> this.checkHandler(item.id)}/>
                <Text style={
                    {...styles.checkBoxTxt,
                    color:item.checked?"#fc5185":"gray",
                    fontWeight:item.checked? "bold" :"normal"
                    }}
                >{item.name}</Text>
                <Text style={{marginLeft:95,color:'gray',fontWeight:'bold'}} onPress={() => {if(item.checked){ this.decreament(item.id)}}} ><Badge status="primary" value="-"/></Text>
                <Text style={styles.checkBoxVal} >{item.value}</Text>
                <Text style={{marginLeft:5,color:'gray',fontWeight:'bold'}} onPress={() => {if(item.checked){this.increament(item.id)}}}><Badge status="warning"  value="+"/></Text>
                </View>
            ))}
        <TouchableOpacity style={styles.submit}>
            <Text style={{color:"white"}} onPress={() => this.onSubmit()}>SUBMIT</Text>
        </TouchableOpacity>
    
    
        </View>
        </ScrollView>
    );
    }
    
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    },
    header:{
    fontSize:25,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:40
    },
    item:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:10,
    flexDirection:"row",
    },
    checkBoxTxt:{
    marginLeft:20
    },
    checkBoxVal: {
        marginLeft: 5
    },
    submit:{
    width:"80%",
    backgroundColor:"#fc5185",
    borderRadius:20,
    padding:10,
    alignItems:"center",
    marginTop:40
    }
});
export default CheckBoxs;