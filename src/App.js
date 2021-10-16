import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsLink45Deg, BsFillPlayFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { connect } from "react-redux";
import { activateRoom } from "./redux/Chat/chat.actions";


 function Media({ cover_photo_url, download_url, tracking_link, media_type }) {
   return (
     <div>
       <div
         style={{
           maxHeight: "250px",
           maxWidth: "100px",
           overflow: "hidden",
           position: "relative",
         }}
       >
         {media_type == "video" && (
           <div
             style={{
               position: "absolute",
               marginTop: "80%",
               marginLeft: "40%",
               zIndex: 3,
             }}
           >
             <BsFillPlayFill color="white" size="2.5em" />
           </div>
         )}
         <div
           style={{
             backgroundColor: "rgba(0,0,0,0.3)",
             overflow: "hidden",
             zIndex: 2,
             height: "150px",
             width: "90px",
             position: "absolute",
             borderRadius: "10px",
             marginLeft: "8px",
           }}
         ></div>

         <img
           style={{
             paddingLeft: "10%",
             paddingRight: "10%",
             borderRadius: "10px",
             overflow: "hidden",
             height: "150px",
           }}
           src={cover_photo_url}
         />
       </div>
       <div
         style={{
           display: "flex",
           flexDirection: "row",
           alignItems: "center",
           justifyContent: "center",
           paddingTop: "5%",
           paddingLeft: "5%",
         }}
       >
         <div
           onClick={() => {
             navigator.clipboard.writeText(tracking_link);
           }}
           style={{
             borderTop: "1px solid rgb(232, 241, 244)",
             borderLeft: "1px solid rgb(232, 241, 244)",
             borderBottom: "1px solid rgb(232, 241, 244)",
             borderRight: "1px solid rgb(232, 241, 244)",
             cursor: "pointer",
             padding: "3%",
             borderTopLeftRadius: "5px",
             borderBottomLeftRadius: "5px",
             backgroundColor: "white",
             width: "40%",
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             paddingTop: "11%",
             paddingBottom: "11%",
           }}
         >
           <BsLink45Deg size="1.3em" color="rgb(146, 154, 156)" />
         </div>
         <a
           style={{
             textDecoration: "none",
             width: "45%",
             justifyContent: "center",
             alignItems: "center",
           }}
           target="_blank"
           href={download_url}
           download={download_url}
         >
           <div
             target="_blank"
             href={download_url}
             download={download_url}
             style={{
               borderTop: "1px solid rgb(232, 241, 244)",
               borderRight: "1px solid rgb(232, 241, 244)",
               borderBottom: "1px solid rgb(232, 241, 244)",
               cursor: "pointer",
               padding: "3%",
               borderTopRightRadius: "5px",
               borderBottomRightRadius: "5px",
               backgroundColor: "white",
               justifyContent: "center",
               alignItems: "center",
               paddingLeft: "17%",
               paddingTop: "20%",
               paddingBottom: "20%",
             }}
           >
             <HiDownload size="1.3em" color="rgb(146, 154, 156)" />
           </div>
         </a>
       </div>
     </div>
   );
 }
 function Campaign({ campaign }) {
   //console.log(campaign.campaign_name);
   return (
     <div key={campaign.id}>
       <div
         style={{
           display: "flex",
           flexDirection: "row",
           paddingTop: "5%",
           paddingBottom: "5%",
           paddingLeft: "5%",
         }}
       >
         <div style={{ height: "20%", width: "20%" }}>
           <img
             style={{
               maxWidth: "100%",
               maxHeight: "100%",
               borderRadius: "17px",
             }}
             src={campaign.campaign_icon_url}
           />
         </div>
         <div
           style={{
             display: "flex",
             flexDirection: "column",
             justifyContent: "space-between",
             paddingLeft: "3%",
             paddingTop: "1.5%",
             paddingBottom: "1.5%",
           }}
         >
           <div>
             <b>{campaign.campaign_name}</b>
           </div>
           <div style={{ color: "rgb(64, 144, 62)" }}>
             <b>{campaign.pay_per_install}</b> pay per install
           </div>
         </div>
       </div>
       <div
         style={{
           borderColor: "rgb(232, 241, 244)",
           borderWidth: "1px",
           borderStyle: "solid",
           backgroundColor: "rgb(248, 251, 252)",
           display: "flex",
           flexDirection: "row",
           overflow: "scroll",
           maxHeight: "5%",
           paddingLeft: "10%",
           paddingTop: "6%",
           paddingBottom: "7%",
         }}
       >
         {campaign.medias.map((media) => (
           <Media {...media} />
         ))}
       </div>
     </div>
   );
 }

function App() {
   const [campaigns, setCampaigns] = useState([]);

   useEffect(() => {
     axios
       .get("https://www.plugco.in/public/take_home_sample_feed")
       .then((response) => setCampaigns(response.data.campaigns))
       .catch((response) => console.log(response));
   });

   return (
     <div
       style={{
         width: "300px",
         height: "700px",
         overflow: "scroll",
         marginLeft: "40%",
       }}
     >
       <div
         style={{
           position: "fixed",
           borderColor: "rgb(251, 252, 253)",
           borderStyle: "solid",
           width: "300px",
           backgroundColor: "white",
           height: "7%",
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
         }}
       >
         <b>PLUGS</b>
       </div>
       <div style={{ paddingTop: "20%" }}>
         {campaigns.map((campaign) => (
           <Campaign {...{ campaign }} />
         ))}
       </div>
     </div>
   );
 }

export default App;
