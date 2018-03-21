import React from 'react'
import { Tab, Input, Button, List, Image } from 'semantic-ui-react'
import './components.css';
import avatar from "../assets/images/avatar.png"
import {Link } from "react-router-dom";

const panes = [
  { menuItem: 'Kunde anlegen', render: () => <Tab.Pane>
    <div>
      <h2 className="head-label">Neuen Kunden anlegen</h2>
      <span className="input-label">Vorname</span>
      <Input  placeholder="Vorname"/>
      <span className="input-label-inline" >Nachname</span>
      <Input className="input-text"  placeholder="Nachname"/>
    </div>
    <div className="input-fields">
      <span className="input-label">Straße und Hausnr.</span>
      <Input className="input-text"  placeholder="Adresse"/>
    </div>
    <div className="input-fields">
      <span className="input-label">Postleitzahl</span>
      <Input placeholder="Postleitzahl"/>
        <span className="input-label-inline" >Ort</span>
        <Input className="input-text"  placeholder="Ort"/>
    </div>
    <div className="input-fields">
      <span className="input-label">Land</span>
      <Input className="input-text"  placeholder="Land"/>
    </div>
    <div className="input-fields">
      <span className="input-label">Telefonnummer</span>
      <Input className="input-text"  placeholder="Telefonnummer"/>
    </div>
    <div className="input-fields">
      <Button id="button-cancel-kunde" align="right" className="button-menu">Abbrechen</Button>
      <Button id="button-save-kunde" className="button-menu">Speichern</Button>
    </div>

  </Tab.Pane> },
  { menuItem: 'Kundenliste', render: () => <Tab.Pane>
    <h2 className="head-label">Alle Kunden anzeigen</h2>
    <List divided relaxed selection verticalAlign='middle' size="large">
     <List.Item>
       <List.Content floated="right">
         <Button circular="true" icon="edit"></Button>
         <Button circular="true" icon="remove"></Button>
       </List.Content>
       <Image avatar src={avatar} />
       <List.Content>
         <Link to="/kunde/details">
         <List.Header>Bill Gates</List.Header></Link>
         <List.Description as='a'>Reutlingen, DE</List.Description>
       </List.Content>
     </List.Item>
     <List.Item>
       <List.Content floated="right">
         <Button circular="true" icon="edit"></Button>
         <Button circular="true" icon="remove"></Button>
       </List.Content>
       <Image avatar src={avatar} />
       <List.Content>
         <List.Header>Elon Musk</List.Header>
         <List.Description as='a'>Marseille, FR</List.Description>
       </List.Content>
     </List.Item>
     <List.Item>
       <List.Content floated="right">
         <Button circular="true" icon="edit"></Button>
         <Button circular="true" icon="remove"></Button>
       </List.Content>
       <Image avatar src={avatar} />
       <List.Content>
         <List.Header>Arnold Schwarzenegger</List.Header>
         <List.Description as='a'>Saarland, DE</List.Description>
       </List.Content>
     </List.Item>
   </List>
  </Tab.Pane> },
]

const TabExampleVerticalTrue = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={panes} defaultActiveIndex={1} />
)

export default TabExampleVerticalTrue
