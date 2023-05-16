import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk(
   `contacts/getContacts`,
   async (payload , { getState }) => {
      const state = getState();
      try
      { 
      const response = await axios.get(`https://api.green-api.com/waInstance${state.contacts.idinstance}/getContacts/${state.contacts.ApiTokenInstance}`)
      const data = await response.data.slice(0 , 40)
      return data;
   }
      catch(error) {
         console.log(Error)
      }
   }
)
export const getContactInfo = createAsyncThunk(
   `contacts/getContactInfo`,
   async (payload , {getState}) => {
      const state = getState();
      try {const response = await axios.post(`https://api.green-api.com/waInstance${state.contacts.idinstance}/GetContactInfo/${state.contacts.ApiTokenInstance}`, {chatId: payload});
      const data = await response.data
      return data;
   }
      catch(error) {
         console.log(Error)
      }
      
   }
)
export const sendMessage = createAsyncThunk(
   `contacts/sendMessage`,
   async (payload , { getState }) => {
      const state = getState();
      try
      { 
      const response = await axios.post(`https://api.green-api.com/waInstance${state.contacts.idinstance}/sendMessage/${state.contacts.ApiTokenInstance}` , {"chatId": payload.ActiveIndex , "message":payload.text})
      const data = await response.data;
      return data;
   }
      catch(error) {
         console.log(Error)
      }
   }
)
export const receiveMessage = createAsyncThunk(
   `contacts/receiveMessage`,
   async (_, { getState }) => {
      const state = getState();
      try
      { 
      const controller = new AbortController();
      const response = await axios.get(`https://api.green-api.com/waInstance${state.contacts.idinstance}/ReceiveNotification/${state.contacts.ApiTokenInstance}`,{signal: controller.signal})
      const data = await response.data;
      await axios.delete(`https://api.green-api.com/waInstance${state.contacts.idinstance}/deleteNotification/${state.contacts.ApiTokenInstance}/${data.receiptId}`)
      console.log(data)
      if (data == null || data.body.typeWebhook == "outgoingMessageStatus" || data.body.typeWebhook ==  "outgoingAPIMessageReceived"){
         controller.abort()
      }
      return data;
      }
      catch(error) {
      }
   }
)


const ContactSlice = createSlice({
    name: "contacts",
    initialState:{
        idinstance:"", 
        ApiTokenInstance:"",
        savedContacts: [],
        savedContactsInfo: [],
        sessionMessages:{},
        savedContactsLoaded:false,
        savedContactsInfoLoaded:false,
        activeIndex: null,
    }, 
    reducers:{
      addTokenAndId: (state, action) => {
         state.idinstance = action.payload.idInstance;
         state.ApiTokenInstance = action.payload.apiTokenInstance;
         console.log(state.ApiTokenInstance , state.idinstance )
        },
     choseContact: (state , action) =>{
        state.activeIndex = action.payload;
     },
     uptadeUserInfo: (state, action) => {
        const index = state.savedContacts.findIndex(item => item.id === action.payload.chatId);
        state.savedContacts[index].fullinfo = action.payload;
     },
     updateSessionMessages:(state , action) => {
      state.sessionMessages[action.payload.id].push(action.payload.item);
     },
     addSingleContact: (state, action) => {
      state.activeIndex = action.payload;
      state.sessionMessages[[action.payload]] = [];
     } 

    },
    extraReducers: {
      [getContacts.pending]: (state) => {
         state.status = `loading`;
      },
      [getContacts.fulfilled]: (state , action) => {
         state.savedContacts = action.payload;
         state.savedContacts = state.savedContacts.filter(item => item.type !== "group");
         state.savedContactsLoaded = true;
         state.savedContacts.forEach(item => {getContactInfo(item.id)});
         for (let key of state.savedContacts){
           state.sessionMessages[[key.id]] = [];
         }
         
      },
      [getContacts.rejected]: (state) => {
         state.status = "rejected";
      },
      [getContactInfo.fulfilled]: (state , action) =>{
      state.savedContactsInfo.push(action.payload);
      if (state.savedContactsInfo.length ==  state.savedContacts.length) {
         state.savedContactsInfoLoaded = true;
      }
      },
      [sendMessage.fulfilled]: (state , action) => {
         console.log("your message send!" , action.payload)
      },
      [receiveMessage.fulfilled]:(state , action) => {
         if(action.payload == undefined){
            return
         }
         else{
         const id = Date.now();
         const chatid = action.payload.body.senderData.chatId;
         let message = "";
         action.payload.body.messageData.typeMessage == "extendedTextMessage"?
         message = action.payload.body.messageData.extendedTextMessageData.text
            :
         message = action.payload.body.messageData.textMessageData.textMessage;

         if (state.sessionMessages[[chatid]] != undefined){
            state.sessionMessages[[chatid]].push({"message":message, "type":"received" , "id":id});   
         }}

      },
      
    }
})

export const {choseContact , uploadContacts , uptadeUserInfo , addSessionMessage  , updateSessionMessages , addSingleContact , addTokenAndId} = ContactSlice.actions;
export default ContactSlice.reducer;