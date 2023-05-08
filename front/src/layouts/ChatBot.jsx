import React from 'react';
import ChatBot from 'react-simple-chatbot';
// import logo from './nuage.gif'
import { BsFillChatSquareDotsFill } from 'react-icons/bs';
import './chat.css'
function Chat() {
  const steps = [
    {
      id: '0',
      message: 'Bienvenue sur Dreamly Real',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Veuillez entrer votre nom',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Salut, {previousValue} ! Que puis-je faire pour toi ?',
      trigger: '4',
    },
    {
      id: '4',
      options : [
        { 
          value : "Services",
          label : "Dreamly Real? C'est quoi?",
          trigger : "service"
        },
        { 
          value : "ornix",
          label : "Mais que fait on de tous les résultats de recherche ?",
          trigger : "ornix"
        },
        { 
          value : "cauchemars",
          label : "Et les cauchemars, on en fait quoi ?",
          trigger : "cauchemars"
        },
      ]
    },
    {
      id: 'service',
      message: 'C\'est une plateforme mettant en valeur le travail acharné des chercheurs de l\'Institut International des Rêves. Ces recherches focalisées sur l\'étude des rêves et de ce qu\'ils en seraient.',
      trigger: '5',
    },
    {
      id: 'ornix',
      message: 'Les résultats seront utilisés pour prédire le futur par le biais des rêves, que ce soit pour prédire les situations amoureuses, les maladies ou autres.',
      trigger: '5',
    },
    {
      id: 'cauchemars',
      message: 'D\'après leurs études, les cauchemars ne prédiraient rien, mais que par contre il faut aller voir un spécialiste',
      trigger: '5',
    },
    {
      id: '5',
      message: 'Encore des questions?',
      trigger: '6',
    },
    {
      id: '6',
      options : [
        { 
          value : "oui",
          label : "Oui",
          trigger : "4"
        },
        { 
          value : "non",
          label : "Non",
          trigger : "7"
        }
      ]
    },
    {
      id: '7',
      message: 'Merci et bonne navig à toi !!',
      end : true
    },
  ];
  return (
    <div className='chat'>
      <ChatBot 
        botDelay = {3000}
        // Style des messages dans le bot
        // bubbleStyle = {{backgroundColor : 'black'}}

        
        floating = {true}
        floatingIcon = {<BsFillChatSquareDotsFill />}
        floatingStyle = {{headerBgColor: '#EF6C00'}}
        style = {{color: '#EF6C00'}}
        headerTitle="Raketa kely"
        // speechSynthesis={{ enable: true, lang: 'fr' }}
        recognitionEnable={true}
        steps={steps} 
        hideBotAvatar = {true}
        hideUserAvatar = {true}
        cache = {false}
        />
    </div>
  );
}

export default Chat;
