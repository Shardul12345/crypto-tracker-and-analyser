import { Dialog, DialogContent, FormControl } from "@material-ui/core";
                                 
import { useState } from "react";

import { CryptoState } from "../CryptoContext";

const SetPriorityDialog = (props) => {
  const [digit, setDigit] = useState("");
  const [note, setNote] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const { priorityWatchlist, setPriorityWatchlist } = CryptoState();

  const handleSubmit = () => {
    console.log(digit, note, expiryDate);
  };

  const handleClose = () => {
    console.log("closed");
  };

  const addCoinToPriorityWatchlist = () => {
    const data = {
      coin: props.coin,
      digit: digit,
      note: note,
      expiryDate: expiryDate,
    };

    const temp = priorityWatchlist;
    temp.push(data);
    setPriorityWatchlist(temp);
    console.log(priorityWatchlist);
    props.setIsModal(false);
  };

  return (
    <Dialog open={props.isOpen} onClose={handleClose}>
      <DialogContent>
        <FormControl>
        <label for="note">Note</label>
          <input type="text" id="note" onChange={(e) => setNote(e.target.value)} />
          <label for="priority">Priority</label>
          <input type="number" id="priority" onChange={(e) => setDigit(e.target.value)} />
          <label for="date">Expiry Date</label>
          <input type="date" id="date" onChange={(e) => setExpiryDate(e.target.value)} />
        </FormControl>
        <button onClick={() => addCoinToPriorityWatchlist()}>Submit</button>
      </DialogContent>
    </Dialog>
  );
};

export default SetPriorityDialog;
