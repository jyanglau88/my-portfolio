import axios from "axios";

export default {
  // Gets all of it
  getContactMes: function() {
    return axios.get("/api/contactme");
  },
  // Gets it with the given id
  getContactMe: function(id) {
    return axios.get("/api/contactme/" + id);
  },
  // Deletes it with the given id
  deleteContactMe: function(id) {
    return axios.delete("/api/contactme/" + id);
  },
  // Saves it to the database
  saveContactMe: function(contactmeData) {
    return axios.post("/api/contactme", contactmeData);
  }
};