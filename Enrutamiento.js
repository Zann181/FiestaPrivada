import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import AddAttendee from './AddAttendee';
import AttendeeList from './AttendeeList';
import Menu from './Menu';


const Stack = createStackNavigator();
const Enrutamiento = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }}  />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}  /> 
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}  />
                <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false }}  />
                <Stack.Screen name="AddAttendee" component={AddAttendee} options={{ headerShown: false }}  />
                <Stack.Screen name="AttendeeList" component={AttendeeList} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default Enrutamiento;