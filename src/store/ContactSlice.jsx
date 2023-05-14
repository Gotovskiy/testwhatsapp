import { createSlice } from "@reduxjs/toolkit";

export const ContactSlice = createSlice({
    name: "contacts",
    initialState:{
        SavedContacts: [
            {id: 148540384641244 , name:"Json Born" , phone:"+79966175970" , message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.", avatar:"./img/user_first.png"},
            {id: 148540327141245 , name:"Java Rojdestvenskiy" , phone:"+79667175940" , message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.", avatar:"./img/user_second.png"},
            {id: 148540327141246 , name:"Gunter Odim" , phone:"+79163175900" , message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.", avatar:"./img/user_third.png"},
        ],
        ActiveIndex: 2,
    },
    reducers:{
     ChoseContact: (state , action) =>{
        const newIndex = state.SavedContacts.findIndex(item => item.id == action.payload)
        state.ActiveIndex = newIndex;
     }   

    }
})

export const {ChoseContact} = ContactSlice.actions;
export default ContactSlice.reducer;