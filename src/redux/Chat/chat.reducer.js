import {ACTIVATE_ROOM} from "./chat.types"

const INITIAL_STATE = {

  numOnline; 2,
  numMembers: 10,

  activeRoom: 1,
  rooms: [
  {
    id: 1,
    name: "coolaidCooler",
    description: "drink the coolaid",
    chats: [
      { name: "Prikshet Sharma", chat: "Hi" },
      { name: "Ana F", chat: "Hi, good to see you!" },
      { name: "John J", chat: "Hi, good to see you too!" },
      { name: "Liam N", chat: "Did you see that new movie we talked about?" },
      { name: "Greogory P", chat: "How is your project coming along?" },
      { name: "Ana F", chat: "This is great!" },
      { name: "Liam N", chat: "I love this product!" },
      { name: "Prikshet Sharma", chat: "Hey, I made it!" },
    ],
  },
  {
    id: 2,
    name: "penStorm",
    description: "poke poke",
    chats: [
      { name: "Prikshet Sharma1", chat: "Hi" },
      { name: "Ana F1", chat: "Hi, good to see you! cool cool" },
      { name: "John J1", chat: "Hi, good to see you too! cool 1 cool 2" },
      { name: "Liam N1", chat: "Did you see that new movie we talked about?" },
      { name: "Greogory P1", chat: "How is your project coming along?" },
      { name: "Ana F1", chat: "This is great!" },
      { name: "Liam N1", chat: "I love this product!" },
      { name: "Prikshet Sharma1", chat: "Hey, I made it!" },
    ],
  },
  {
    id: 3,
    name: "lobby",
    description: "do it on the couch",
    chats: [
      { name: "Prikshet Sharma2", chat: "Hi" },
      { name: "Ana F2", chat: "Hi, good to see you!" },
      { name: "John J2", chat: "Hi, good to see you too!" },
      { name: "Liam N2", chat: "Did you see that new movie we talked about?" },
      { name: "Greogory P2", chat: "How is your project coming along?" },
      { name: "Ana F2", chat: "This is great!" },
      { name: "Liam N2", chat: "I love this product!" },
      { name: "Prikshet Sharma2", chat: "Hey, I made it!" },
    ],
  },
];
}


const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ACTIVATE_CHAT:
    return {...state, activeRoom: action.data}

    default: return state
  }
}

export default reducer;
