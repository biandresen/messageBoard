import { db } from "./db/queries.js";

export const controller = {
  getAllMessages: async (req, res) => {
    const messages = await db.getAllMessages();
    console.log(messages);
    res.render("index", { messages: messages });
  },
  createMessage: async (req, res) => {
    const { messageText, username } = req.body;
    console.log(messageText, username);
    const newMessage = await db.createMessage(messageText, username);
    console.log(newMessage);
    res.redirect("/");
  },

  getMessageById: async (req, res) => {
    const id = req.params.id;
    const message = await db.getMessageById(id);
    res.render("messageDetails", { message });
  },

  updateMessage: (req, res) => {
    // Handle updating a message
  },

  deleteMessage: (req, res) => {
    // Handle deleting a message
  },
};
