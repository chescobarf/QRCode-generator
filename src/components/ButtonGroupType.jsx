import React, { Fragment, useState, useEffect } from "react";
import QRCode from "react-qr-code";
import {
  ButtonGroup,
  Button,
  Typography,
  TextField,
  Box,
  Fade,
} from "@material-ui/core";
import { capitalize } from "../helpers/index";

const ButtonGroupType = () => {
  const [typeQR, setTypeQR] = useState("type");
  const [valueQR, setValueQR] = useState("");
  const [checked, setChecked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    let res = e.currentTarget.children[0].innerText;
    setTypeQR(res.toLowerCase());
    return typeQR;
  };

  const handleQR = (e) => {
    setValueQR(e.target.value);
  };

  useEffect(() => {
    if (valueQR !== "") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  });

  return (
    <Fragment>
      <Box sx={{ marginBottom: 30 }}>
        <Box sx={{ marginBottom: 10 }}>
          <Typography variant="subtitle1">
            What type of content do you need
          </Typography>
        </Box>

        <ButtonGroup
          variant="outlined"
          aria-label="medium primary button group"
          color="primary"
        >
          <Button onClick={handleClick}>URL</Button>
          <Button onClick={handleClick}>Telephone</Button>
          <Button onClick={handleClick}>Text</Button>
        </ButtonGroup>
      </Box>
      <Box sx={{ display: "block" }}>
        <Typography variant="subtitle1">Type here the {typeQR}</Typography>
        <TextField
          id="standard-basic"
          label={capitalize(typeQR)}
          variant="standard"
          onChange={handleQR}
        />
      </Box>

      <Box sx={{ marginTop: 30 }}>
        <Fade in={checked}>
          <QRCode value={valueQR} fgColor="#2f3d8b" />
        </Fade>
      </Box>
    </Fragment>
  );
};

export default ButtonGroupType;
