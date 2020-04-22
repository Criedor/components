import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyMap from "./MyMap";


class MyTabs extends React.Component {

render () {
return (
  <Tabs>
    <TabList>
      <Tab>Where i live</Tab>
      <Tab>Where i wanna go</Tab>
      <Tab>Where its nice</Tab>
      <Tab>Where ever?</Tab>
    </TabList>
    <TabPanel>
    <MyMap position={[49.755405, 6.643762]} zoom={20} popup={"This is Trier and I enjoy living here."}/>
    </TabPanel>
    <TabPanel>
    <MyMap position={[59.334591, 18.063240]} zoom={15} popup={"I always wanted to go to sweden. Jag studera svenska pa folkhögskola"}/>
    </TabPanel>
    <TabPanel>
    <MyMap position={[50.87481, 8.02431]} zoom={30} popup={"This is Siegen, the city is was born. It`s a nice city!"}/>
    </TabPanel>
    <TabPanel>
    <MyMap position={[-22.275801, 166.457993]} zoom={3} popup={"Never heard of that before!"}/>
    </TabPanel>
  </Tabs>
    )
  }
}

export default MyTabs